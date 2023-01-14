import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './navigation';
import ResizeDevice from '@/shared/components/ResizeDevice';
import PWA from '@/shared/components/PWA';
import dayjs from 'dayjs';
import isBetweenDayjs from 'dayjs/plugin/isBetween';
dayjs.extend(isBetweenDayjs);
import './global.css';
import Script from '@/shared/components/Script';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Script
        env="prod"
        content={`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "eek1ur8f52");
        `}
      />
      <PWA />
      <ResizeDevice>
        <Navigation />
      </ResizeDevice>
    </LocalizationProvider>
  </React.StrictMode>
);
