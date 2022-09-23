import createLoggerService from '../services/logger.service';
import createLocaleService from '../services/locale.service';

const logger = createLoggerService();
global.logger = logger;
const {__t} = createLocaleService();
global.__t = __t;
