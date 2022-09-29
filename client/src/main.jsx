import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './navigation';
import {RecoilRoot} from 'recoil';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  </React.StrictMode>
);
