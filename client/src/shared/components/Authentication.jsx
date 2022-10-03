import { useState, useEffect } from 'react';
import { redirect, useNavigation } from 'react-router-dom';

export default function Authentication ({ children, publicRoutes }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { location } = useNavigation();

  useEffect(() => {
    window.addEventListener('storage', () => {
      setIsAuthenticated(Boolean(localStorage.getItem('token')));
    });

    return () => {
      window.removeEventListener('storage', () => {
        setIsAuthenticated(Boolean(localStorage.getItem('token')));
      });
    };
  }, []);

  if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
    redirect('/login');
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}
