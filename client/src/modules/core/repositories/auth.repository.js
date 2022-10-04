import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const auth_crud = repository(FetcherApi)('auth');

export default auth_crud;

