import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const me_crud = repository(FetcherApi)('me');

export default me_crud;

