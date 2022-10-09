
import createLocaleService from '../services/locale.service';

const {__t} = createLocaleService();
globalThis.__t = __t;
