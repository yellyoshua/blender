import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const upload_crud = repository(FetcherApi)('upload');

export default upload_crud;

