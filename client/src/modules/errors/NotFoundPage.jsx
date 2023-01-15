import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useResizeDeviceStore } from '@/components/ResizeDevice';

export default function NotFoundPage () {
  const navigate = useNavigate();
  const isMobile = useResizeDeviceStore((state) => state.isMobile);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

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
}
