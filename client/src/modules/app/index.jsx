import { useState } from 'react';
import reactLogo from './assets/react.svg';
import styles from './app.module.css';

export function loader ({params}) {
  return params;
}

export default function App () {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.App}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={[styles.logo, styles.react]} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.read_the_docs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
