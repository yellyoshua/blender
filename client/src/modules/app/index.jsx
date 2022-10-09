import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './app.module.css';
import services from '../core/services';
import useAuthentication from '../shared/hooks/useAuthentication';

const usersService = services.users();

export default function App () {
  const [users, setUsers] = useState([]);
  const auth = useAuthentication();
  
  useEffect(() => {
    usersService.get().
    then(setUsers);
  }, []);
  
  console.log('users :', users);
  return (
    <div className={styles.App}>
      <h1>Interests list</h1>
      <button onClick={auth.logout}>
        Logout
      </button>
      {
        users.map((user) => {
          return (
            <div key={user._id}>{user.email}</div>
          );
        })
      }
      <Outlet />
    </div>
  );
}
