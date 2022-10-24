import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './navigation';
import ResizeDevice from './modules/shared/components/ResizeDevice';
import PWA from './modules/shared/components/PWA';
import './global.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

deleteCache();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <PWA />
      <ResizeDevice>
        <Navigation />
      </ResizeDevice>
    </LocalizationProvider>
  </React.StrictMode>
);

// Delete browser cache to see the new version of the app

function deleteCache () {
  if (window.caches && window.caches.keys) {
    caches.keys().then((names) => {
      for (const name of names) {
        caches.delete(name);
      }
    });
  }
}
