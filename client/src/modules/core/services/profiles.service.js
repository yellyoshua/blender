import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const profiles_crud = repository(FetcherApi)('profiles');

export default profiles_crud;

