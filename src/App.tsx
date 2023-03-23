import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner'
import LandingPage from './Pages/Landing';

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div>
      {loading && <Triangle height="80" width="80" color="#eab308" ariaLabel="triangle-loading" wrapperClass="spinner" visible />}
      {!loading && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      )}
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
