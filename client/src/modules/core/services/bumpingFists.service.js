import { FetcherApi } from '../configurations/fetcher';
import repository from '../utils/repository';

const bumping_fists_crud = repository(FetcherApi)('bumping_fists');

export default bumping_fists_crud;
