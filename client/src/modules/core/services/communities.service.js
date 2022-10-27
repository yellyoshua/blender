import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const communities_crud = repository(FetcherApi)('communities');

export default communities_crud;

