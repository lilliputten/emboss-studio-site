const site = require('../site.js');

const siteName = 'Emboss';
const companyName = 'Emboss';

/** @type TLngDef */
const en = {
  // General
  siteName: siteName, // Example
  site: {
    name: siteName,
    briefName: site.domainName,
    description: 'Site description',
    author: 'Emboss Studio',
    // TODO: Keywords, etc
    meta: 'Meta', // DEBUG:Example of different data formats
    currency: '$',
  },
  company: {
    name: companyName,
    address: 'Company address',
  },
  pages: {
    checkout: 'Checkout',
    contacts: 'Contacts',
    orderCompleted: 'Order completed',
    paymentMethod: 'Payment method',
    productsGrid: 'Products grid',
    profile: 'Profile',
    profileLogIn: 'Log in',
    profileLogOn: 'Log on',
    profileRestorePassword: 'Restore password',
    shoppingCart: 'Shopping cart',
    singleProduct: 'Single product',
  },
  rubrics: {
    contacts: 'Contacts',
    account: 'Your account',
    forClients: 'Customer care',
    about: 'About us',
    informations: 'Informations',
  },
  servicesMenu: {
    ourBlog: 'Our blog',
    aboutOurShop: 'About our shop',
    secureShopping: 'Secure shopping',
    privacyPolicy: 'Privacy policy',
    deliveryInformations: 'Delivery informations',
    paymentInformations: 'Payment informations',
    contactUs: 'Contact us',
    siteMap: 'Site map',
    topSalesBestsellers: 'Top sales & bestsellers',
    giftVouchers: 'Gift vouchers',
    bestSellers: 'Best sellers',
    orderStatus: 'Order status',
    myWishlist: 'My wishlist',
    deliveryAddress: 'Delivery address',
    orderHistory: 'Order history',
    newsletter: 'Newsletter',
    termsConditions: 'Terms & conditions',
  },
  headerLinks: {
    profile: 'Profile',
    myAccount: 'My account',
    myWishlist: 'My wishlist',
    logIn: 'Log in',
    logOn: 'Log on',
    logOut: 'Log out',
    homepage: 'Homepage',
    homepages: 'Homepages',
    testPage: 'Test page',
    productsGrid: 'Products grid',
    productsGridList: 'Products grid/list',
    singleProductSidebar: 'Single product (sidebar)',
    singleProduct: 'Single product',
    cartPage: 'Cart page',
    emptyCart: 'Cart is empty',
    checkout: 'Checkout',
    payment: 'Payment',
    showCart: 'Show cart',
    men: 'Men',
    women: 'Women',
    sports: 'Sports',
    pages: 'Pages',
    otherLinks: 'Other links',
    products: 'Products',
    enterKeyword: 'Enter keyword here...',
    learnMore: 'Learn more',
    choosePaymentMethod: 'Choose Payment Method',
    catalog: 'Catalog',
    delivery: 'Delivery and payment',
    wholesalers: 'Wholesalers',
    claims: 'Claims',
    contacts: 'Contacts',
    back: 'Back',
  },
  breadcrumbLinks: {
    toHomepage: 'To main page',
    homepage: 'Main page',
    rubric: 'Prefabricated models',
    catalogue: 'Catalogue',
    product: 'Product',
  },
  newsletter: {
    signUp: 'Sign up for our newsletter to get best offers and news.',
    enterEmail: 'Enter your email here...',
  },
  sections: {
    bestSellers: '<span class="bold">Best sellers</span>',
    featuredProducts: '<span class="bold">Featured products</span>',
    newProducts: '<span class="bold">New products</span>',
  },
  products: {
    toCart: 'To cart',
    toCartWide: 'To cart',
    downloadPdf: 'Download PDF manual',
    wishlist: 'Wishlist',
    wishlistFull: 'Save to wishlist',
    discount50: '50% off',
    new: 'New',
    newExclam: 'New!',
    halfPrice: '50%',
    price: 'Price',
    by: 'by',
    productsPerPage: 'per page',
    show: 'Show',
    collection: 'Collection',
    collections: 'Collections',
    kids: 'Kids',
    grid: 'Grid',
    list: 'List',
    yearsOld: 'years old',
    sale: 'Sale!',
    addToCart: 'Add to cart',
    all: 'All',
    inStock: 'In stock',
    casualPersons: 'Casual persons',
    categories: 'Categories',
    find: 'Find',
    filter: 'Filter',
    learnMore: 'Learn more',
    priceFilter: 'Price filter',
    sizeFilter: 'Size filter',
    sort: 'Sort',
    sortAbc: 'ABC',
    sortAZ: 'A-Z',
    sortByAvailability: 'By availability',
    sortByPrice: 'By price',
    ascending: 'ascending',
    descending: 'descending',
    sortZA: 'Z-A',
  },
  productsSample: {
    shoesAndClothes: 'Shoes and clothes',
    womanHighheelShoe: 'Woman highheel shoe',
    classyDate: 'Classy date',
    colorfulCoolRunnigShoes: 'Colorful cool runnig shoes',
    menShoes: 'Men shoes',
    otherStuff: 'Other stuff',
    partyHard: 'Party hard',
    sexyClothes: 'Sexy clothes',
    sexyHighHeels: 'Sexy high heels',
    sexyNight: 'Sexy night',
    sportWears: 'Sport wears',
    winterIsComing: 'Winter is coming',
    womenShoes: 'Women shoes',
  },
  productsMenu: {
    decals: '3D decals',
    aircrafts: 'Aircraft',
    helicopters: 'Helicopters',
    cars: 'Cars',
    scale: 'Scale',
    discounts: 'Discounts and promotions',
    new: 'New products',
    hits: 'Hit of sales',
  },
  singleProduct: {
    editorReview: 'Editor review',
    returnPolicy: 'Return policy',
    description: 'Description',
    highQualityAndComfort: 'High quality and comfort',
  },
  shoppingCart: {
    productCode: 'Product code',
    checkout: 'Checkout',
    continueShopping: 'Continue shopping',
    preview: 'Preview',
    price: 'Price',
    product: 'Product',
    quantity: 'Quantity',
    total: 'Total',
  },
  checkout: {
    payment: 'Payment',
    paymentMethod: 'Payment Method',
    returnPolicy: 'Return policy',
    paymentMethodInfo: 'Payment Method Choosing',
    city: 'City',
    address: 'Address',
    backToCart: 'Back to cart',
    backToCatalogue: 'Back to catalogue',
    contactInfo: 'Contact info',
    selectCountry: 'Select country',
    country: 'Country',
    shippingInfo: 'Shipping info',
    shippingType: 'Shipping type',
    deliveryExpress: 'Express',
    deliveryStandard: 'Standard',
    deliveryRussianPost: 'Russian Post',
    deliverySdek: 'SDEK',
    deliveryLPost: 'L Post',
    telephone: 'Telephone',
    zipCode: 'Zip code',
    addressCity: 'City',
    addressText: 'Address text',
    addressLine1: 'Address line 1',
    addressLine2: 'Address line 2',
    example: 'Example',
    login: 'Full name',
    fullName: 'Full name',
    emailAddress: 'E-mail address',
    phone: 'Phone',
  },
  payment: {
    sampleName: 'John Smith',
    ccv: 'CCV',
    note: 'Note',
    returnPolicy: 'Return policy',
    anyNoteToUs: 'Any note to us',
    cardholderFullName: 'Cardholder full name',
    creditCardNumber: 'Credit card number',
    expire: 'Expire',
    month: 'Month',
    moreInfo: 'More info',
    paymentInfo: 'Payment info',
    placeOrder: 'Place order',
    year: 'Year',
  },
  paymentMethods: {
    robokassa: 'Robokassa',
    bankTransfer: 'Bank transfer',
    yandexCard: 'Yandex Card',
    cashOnDelivery: 'Cash on delivery',
    cashPaymentToTheCourier: 'Cash payment to the courier',
  },
  orderCompleted: {
    title: 'Order completed',
    text: 'Ваш заказ № …. сформирован, информация поступит на вашу электронную почту.',
  },
  profile: {
    loginName: 'Login name',
    email: 'E-mail',
    forgotPassword: 'Forgot password?',
    logon: 'Logon',
    profileText: 'Logon text',
    logonText: 'Logon text',
    logonTitle: 'Logon title',
    login: 'Login',
    loginText: 'Login text',
    loginTitle: 'Login title',
    password: 'Password',
    password2: 'Repeat password',
    rememberMe: 'Remember me',
    restorePasswordText: 'Restore password for previously created account.',
    restorePassword: 'Restore password',
    save: 'Save',
  },
};

module.exports = en;
