import { Outlet } from 'react-router-dom';
import styles from './app.module.css';

export function loader ({params}) {
  return params;
}

export default function App () {
  return (
    <div className={styles.App}>
      <h1>Hola </h1>
      <Outlet />
    </div>
  );
}
