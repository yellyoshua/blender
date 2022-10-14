import React from 'react';
import { useResizeDeviceStore } from '../shared/components/ResizeDevice';

const PageNotFound = () => {
  const isMobile = useResizeDeviceStore((state) => state.isMobile);

  return (
    <div
      className={
        `flex flex-col min-h-screen items-center
        justify-center bg-tertiary pointer-events-none`
      }
    >
      {
        isMobile
          ? <img src="/illustrations/not_found.svg" style={{ minWidth: 300 }} alt="not-found" />
          : <img
            className="w-5/12"
            src="/illustrations/not_found.svg"
            style={{ maxWidth: 1000 }}
            alt="not-found" />
      }
    </div>
  );
};

export default PageNotFound;
