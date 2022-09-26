// import {createLogger, format, transports} from 'winston';

export default () => {
  return {
    info (message, obj) {
      if (obj) {
        console.log('info', message, {
          obj
        });
      } else {
        console.log('info', message);
      }
    },
    warn (message, obj) {
      if (obj) {
        console.warn('warn', message, {
          obj
        });
      } else {
        console.warn('warn', message);
      }
    },
    error (message, obj) {
      if (obj) {
        console.error('error', message, {
          obj
        });
      } else {
        console.error('error', message);
      }
    }
  };
};