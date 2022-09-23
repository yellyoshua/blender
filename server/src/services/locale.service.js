import i18n from 'i18n';
import path from 'path';

/**
 * Configure the i18n module
 * with the locales available in the application
 */

export default () => {
  i18n.configure({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    directory: path.join(__dirname, '../locales'),
    header: 'app-language',
    updateFiles: false,
    extension: '.json',
    objectNotation: true,
    logDebugFn: logger.debug,
    logWarnFn: logger.warn,
    logErrorFn: logger.error
  });

  i18n.setLocale('en');

  return {
    __t: (message, locale) => {
      return i18n.__({
        phrase: message,
        locale: locale || i18n.getLocale()
      });
    }
  };
};
