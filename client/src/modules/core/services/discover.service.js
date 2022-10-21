import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const discover_crud = repository(FetcherApi)('discover');

export default discover_crud;
