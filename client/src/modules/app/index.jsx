import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './app.module.css';
import interestsService from '../core/services/interests.service';
import useAuthentication from '../shared/hooks/useAuthentication';

const interestsApi = interestsService();

export default function App () {
  const [interests, setInterests] = useState([]);
  const auth = useAuthentication();

  useEffect(() => {
    interestsApi.get().
    then(setInterests);
  }, []);

  return (
    <div className={styles.App}>
      <h1>Interests list</h1>
      <button onClick={auth.logout}>
        Logout
      </button>
      {
        interests.map((user) => {
          return (
            <div key={user._id}>{user.name}</div>
          );
        })
      }
      <Outlet />
    </div>
  );
}
