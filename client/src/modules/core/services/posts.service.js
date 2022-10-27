import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const posts_crud = repository(FetcherApi)('posts');

export default posts_crud;

