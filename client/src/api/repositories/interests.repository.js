import { FetcherApi } from '../../configurations/fetcher';
import repository from '../repository';

const interests_crud = repository(FetcherApi)('/interests');

export default interests_crud;

