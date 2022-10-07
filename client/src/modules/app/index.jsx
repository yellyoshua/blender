import { Outlet, useLoaderData } from 'react-router-dom';
import styles from './app.module.css';
import interestsService from '../core/services/interests.service';

const interests = interestsService();

export function loader () {
  return interests.get();
}

export default function App () {
  const response = useLoaderData();

  return (
    <div className={styles.App}>
      <h1>Interests list</h1>
      {
        response.map((user) => {
          return (
            <div key={user._id}>{user.name}</div>
          );
        })
      }
      <Outlet />
    </div>
  );
}
