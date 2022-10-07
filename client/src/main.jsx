import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './navigation';
import {RecoilRoot} from 'recoil';
import ResizeDevice from './modules/shared/components/ResizeDevice';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <ResizeDevice>
        <Navigation />
      </ResizeDevice>
    </RecoilRoot>
  </React.StrictMode>
);
