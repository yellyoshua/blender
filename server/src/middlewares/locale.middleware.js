import i18n from 'i18n';

export default function localeMiddleware () {
  return (req, res, next) => {
    const locales = i18n.getLocales();
    const locale = req.headers['app-language'] || 'en';

    if (locales.includes(locale)) {
      i18n.setLocale(locale);
    }

    next();
  };
}
