// const path = require('path');

const eleventy = require('@11ty/eleventy');
const pluginRss = require('@11ty/eleventy-plugin-rss');

const {
  format,
  // formatInTimeZone,
} = require('date-fns-tz');
const ru = require('date-fns/locale/ru');

const defaultLang = require('./src/_data/defaultLang.js');
const langCodes = require('./src/_data/langCodes.js');

const i18n = require('eleventy-plugin-i18n');

// const htmlmin = require('html-minifier');
const markdownIt = require('markdown-it');
const yaml = require('js-yaml');
const prettier = require('prettier');

// Dev mode?
const envDev = process.env.ELEVENTY_DEV;
const isDev = !!envDev;

const translations = require('./src/_data/i18n');

// const dateFormat = 'yyyy.MM.dd';
const dateFormat = 'd MMM yyyy';
const timeFormat = dateFormat + ', HH:mm';

module.exports = function (eleventyConfig) {
  // Enable subfolders for includes...
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });

  eleventyConfig.addGlobalData('isDev', isDev);

  // Plugins...
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventy.EleventyHtmlBasePlugin);

  // i18n
  eleventyConfig.addPlugin(i18n, {
    // @see: https://github.com/adamduncan/eleventy-plugin-i18n
    translations,
    locales: langCodes,
    defaultLocale: defaultLang,
    fallbackLocales: {
      '*': defaultLang,
    },
  });

  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

  // shortcode to render markdown from string => {{ STRING | markdown | safe }}
  eleventyConfig.addFilter('markdown', function (value) {
    // const markdown = require('markdown-it')({
    const markdown = markdownIt({
      html: true,
    });
    return markdown.render(value);
  });

  eleventyConfig.addFilter('toISOString', (dateString) => new Date(dateString).toISOString());
  eleventyConfig.addFilter('dateFormat', (dateString, localeId) => {
    const opts = {};
    if (localeId && localeId === 'ru') {
      opts.locale = ru;
    }
    // TODO: Access current `lang` value?
    return format(new Date(dateString), dateFormat, opts);
  });
  eleventyConfig.addFilter('timeFormat', (dateString) => format(new Date(dateString), timeFormat));

  // rebuild on CSS changes
  eleventyConfig.addWatchTarget('./src/_includes/css/');
  eleventyConfig.addWatchTarget('./src/css/');

  // Markdown
  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    }),
  );

  // create collections
  eleventyConfig.addCollection('sections', async (collection) => {
    return collection.getFilteredByGlob('./src/sections/*.md');
  });

  // STATIC FILES
  eleventyConfig.addPassthroughCopy({
    './src/static/': '/',
  });

  // TRANSFORM -- Minify HTML Output
  eleventyConfig.addTransform('prettier', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      const result = prettier.format(content, { parser: 'html' });
      /*
       * const result = htmlmin.minify(content, {
       *   useShortDoctype: true,
       *   removeComments: true,
       *   collapseWhitespace: true
       * });
       */
      return result;
    }
    return content;
  });

  /* // TRANSFORM -- Minify HTML Output
   * eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
   *   if (outputPath && outputPath.endsWith('.html')) {
   *     let minified = htmlmin.minify(content, {
   *       useShortDoctype: true,
   *       removeComments: true,
   *       collapseWhitespace: true
   *     });
   *     return minified;
   *   }
   *   return content;
   * });
   */

  return {
    dir: {
      input: 'src',
      output: 'build',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts',
    },
    templateFormats: ['md', 'njk', '11ty.js'],
    htmlTemplateEngine: 'njk',
  };
};
