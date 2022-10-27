import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const personalities_crud = repository(FetcherApi)('personalities');

export default personalities_crud;
