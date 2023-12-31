const site = require('../site.js');

const siteName = 'Emboss';
const companyName = 'Emboss';

/** @type TLngDef */
const ru = {
  // General
  siteName: siteName, // Example
  site: {
    name: siteName,
    briefName: site.domainName,
    description: 'Описание сайта',
    author: 'Emboss Studio',
    // TODO: Keywords, etc
    meta: {
      // DEBUG: Example of different data formats
      metaName: 'Мета',
    },
    currency: '₽',
  },
  company: {
    name: companyName,
    address: 'Адрес компании',
  },
  pages: {
    checkout: 'Оформление заказа',
    contacts: 'Контакты',
    orderCompleted: 'Заказ завершён',
    paymentMethod: 'Выбрать способ оплаты',
    productsGrid: 'Каталог',
    profile: 'Профиль',
    profileLogIn: 'Войти',
    profileLogOn: 'Регистрация',
    profileRestorePassword: 'Восстановить пароль',
    shoppingCart: 'Корзина',
    singleProduct: 'Продукт',
  },
  rubrics: {
    contacts: 'Контакты',
    account: 'Профиль',
    forClients: 'Клиентам',
    informations: 'Информация',
  },
  servicesMenu: {
    ourBlog: 'Наш блог',
    aboutOurShop: 'О нашем магазине',
    secureShopping: 'Безопасный шопинг',
    privacyPolicy: 'Политика конфиденциальности',
    deliveryInformations: 'Информация о доставке',
    paymentInformations: 'Информация об оплате',
    contactUs: 'Связаться с нами',
    siteMap: 'Карта сайта',
    topSalesBestsellers: 'Лучшие продажи и бестселлеры',
    giftVouchers: 'Подарочные сертификаты',
    bestSellers: 'Бестселлеры',
    orderStatus: 'Статус заказа',
    myWishlist: 'Список желаний',
    deliveryAddress: 'Адрес доставки',
    orderHistory: 'История заказов',
    newsletter: 'Новостная рассылка',
    termsConditions: 'Правила и условия',
  },
  headerLinks: {
    profile: 'Профиль',
    myAccount: 'Профиль',
    myWishlist: 'Желания',
    logIn: 'Войти',
    logOn: 'Регистрация',
    logOut: 'Выйти',
    homepage: 'Домашняя страница',
    homepages: 'Основные',
    testPage: 'Тестовая страница',
    productsGrid: 'Таблица продуктов',
    productsGridList: 'Таблица/список продуктов',
    singleProductSidebar: 'Продукт (боковая панель)',
    singleProduct: 'Продукт',
    cartPage: 'Корзина',
    emptyCart: 'Корзина пуста',
    checkout: 'Оформить',
    payment: 'Платеж',
    showCart: 'Купить',
    men: 'Мужчины',
    women: 'Женщины',
    sports: 'Спорт',
    pages: 'Страницы',
    otherLinks: 'Другое',
    products: 'Продукция',
    enterKeyword: 'Введите текст...',
    learnMore: 'Узнать больше',
    choosePaymentMethod: 'Выбрать способ оплаты',
    catalog: 'Каталог',
    delivery: 'Доставка и оплата',
    wholesalers: 'Оптовикам',
    claims: 'Претензии',
    contacts: 'Контакты',
    back: 'Назад',
  },
  breadcrumbLinks: {
    toHomepage: 'На главную страницу',
    homepage: 'Главная',
    rubric: 'Сборные модели',
    catalogue: 'Каталог',
    product: 'Товар',
  },
  newsletter: {
    signUp: 'Подпишитесь на нашу рассылку, чтобы получать лучшие предложения и новости.',
    enterEmail: 'Введите адрес электронной почты...',
  },
  sections: {
    bestSellers: '<span class="bold">Хиты продаж</span>',
    featuredProducts: '<span class="bold">Рекомендуемые товары</span>',
    newProducts: '<span class="bold">Новинки</span>',
  },
  products: {
    toCart: 'Купить',
    toCartWide: 'В корзину',
    downloadPdf: 'Скачать инструкцию в PDF',
    wishlist: 'Желания',
    wishlistFull: 'В лист желаний',
    discount50: '50% off', // Any longer text can't be fit in the circle.
    new: 'New',
    newExclam: 'New!',
    halfPrice: '50%',
    price: 'Цена',
    by: 'по',
    productsPerPage: 'на странице',
    show: 'Показать',
    collection: 'Коллекция',
    collections: 'Коллекции',
    kids: 'Дети',
    grid: 'Таблица',
    list: 'Список',
    yearsOld: 'лет',
    sale: 'Sale!',
    addToCart: 'Добавить в корзину',
    all: 'Все',
    inStock: 'В наличии',
    casualPersons: 'Случайные люди',
    categories: 'Категории',
    find: 'Найти',
    filter: 'Фильтр',
    learnMore: 'Узнать больше',
    priceFilter: 'Цена',
    sizeFilter: 'Размер',
    sort: 'Сортировать',
    sortAbc: 'По алфавиту',
    sortAZ: 'От А до Я',
    sortByAvailability: 'По наличию',
    sortByPrice: 'По цене',
    ascending: 'восходящий',
    descending: 'нисходящий',
    sortZA: 'От Я до А',
  },
  productsSample: {
    shoesAndClothes: 'Обувь и одежда',
    womanHighheelShoe: 'Женская обувь на высоком каблуке',
    classyDate: 'Классное свидание',
    colorfulCoolRunnigShoes: 'Красочные крутые кроссовки для бега',
    menShoes: 'Мужская обувь',
    otherStuff: 'Другие вещи',
    partyHard: 'Вечеринка',
    sexyClothes: 'Сексуальная одежда',
    sexyHighHeels: 'Сексуальные туфли на высоком каблуке',
    sexyNight: 'Сексуальная ночь',
    sportWears: 'Спортивная одежда',
    winterIsComing: 'Зима близко',
    womenShoes: 'Женская обувь',
  },
  productsMenu: {
    decals: '3D декали',
    aircrafts: 'Самолеты',
    helicopters: 'Вертолеты',
    cars: 'Автомобили',
    scale: 'Масштабы',
    discounts: 'Скидки и акции',
    new: 'Новинки',
    hits: 'Хит продаж',
  },
  singleProduct: {
    editorReview: 'Отзыв редактора',
    returnPolicy: 'Условия возврата',
    description: 'Описание',
    highQualityAndComfort: 'Высокое качество и комфорт',
  },
  shoppingCart: {
    productCode: 'Артикул',
    checkout: 'Оформить',
    continueShopping: 'Продолжить покупки',
    preview: 'Предпросмотр',
    price: 'Цена',
    product: 'Продукт',
    quantity: 'Количество',
    total: 'Итого',
  },
  checkout: {
    payment: 'Платеж',
    paymentMethod: 'Способ оплаты',
    returnPolicy: 'Условия возврата',
    paymentMethodInfo: 'Выбор метода платежа',
    city: 'Город',
    address: 'Адрес',
    backToCart: 'Вернуться в корзину',
    backToCatalogue: 'Вернуться в каталог',
    contactInfo: 'Контактная информация',
    selectCountry: 'Выберите страну',
    country: 'Страна',
    shippingInfo: 'Информация о доставке',
    shippingType: 'Тип доставки',
    deliveryExpress: 'Экспресс',
    deliveryStandard: 'Стандартный',
    deliveryRussianPost: 'Почта России',
    deliverySdek: 'СДЭК',
    deliveryLPost: 'Л Пост',
    telephone: 'Телефон',
    zipCode: 'Почтовый индекс',
    addressCity: 'Город',
    addressText: 'Текст адреса',
    addressLine1: 'Адресная строка 1',
    addressLine2: 'Адресная строка 2',
    example: 'Пример',
    fullName: 'ФИО',
    emailAddress: 'E-mail',
    phone: 'Телефон',
  },
  payment: {
    sampleName: 'Иван Петров',
    ccv: 'CCV',
    note: 'Примечание',
    returnPolicy: 'Условия возврата',
    anyNoteToUs: 'Любые дополнительные сведения',
    cardholderFullName: 'ФИО владельца карты',
    creditCardNumber: 'Номер кредитной карты',
    expire: 'Срок действия',
    month: 'Месяц',
    moreInfo: 'Дополнительная информация',
    paymentInfo: 'Платежная информация',
    placeOrder: 'Оформить заказ',
    year: 'Год',
  },
  paymentMethods: {
    robokassa: 'Робокасса',
    bankTransfer: 'Банковский перевод',
    yandexCard: 'Яндекс карта',
    cashOnDelivery: 'Наложенный платеж',
    cashPaymentToTheCourier: 'Оплата наличными курьеру',
  },
  orderCompleted: {
    title: 'Заказ завершён',
    text: 'Ваш заказ № …. сформирован, информация поступит на вашу электронную почту.',
  },
  profile: {
    loginName: 'Логин',
    email: 'E-mail',
    forgotPassword: 'Забыли пароль?',
    logon: 'Регистрация',
    logonText: 'Текст пояснения к странице (если нужен)',
    profileText: 'Текст пояснения к странице (если нужен)',
    logonTitle: 'Регистрация',
    login: 'Войти',
    loginText: 'Текст пояснения к странице (если нужен)',
    loginTitle: 'Войти',
    password: 'Пароль',
    password2: 'Проверка пароля',
    rememberMe: 'Запомнить меня',
    restorePasswordText: 'Восстановить пароль для ранее созданной учётной записи.',
    restorePassword: 'Восстановить пароль',
    save: 'Сохранить',
  },
};

module.exports = ru;
