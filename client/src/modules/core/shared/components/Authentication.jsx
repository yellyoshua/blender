import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';

export default function Authentication ({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(Boolean(token));
  }, []);

  if (!isAuthenticated) {
    redirect('/login');
    return null;
  }

  return (
    <>
      {children}
    </>
  );
}
