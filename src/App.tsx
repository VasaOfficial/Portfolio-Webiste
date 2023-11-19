import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner'
import styled from 'styled-components';
import LandingPage from './Pages/Landing';
import wedding from './assets/Contact/wedding.jpg'

const ContactContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${wedding});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(12,12,12,1) 0%, rgba(12,12,12,0.8) 25%, rgba(12,12,12,0.3) 50%, rgba(12,12,12,0.6) 75%, rgba(12,12,12,0.8) 100%),
            linear-gradient(to left, rgba(12,12,12,0.8) 0%, rgba(12,12,12,0.6) 25%, rgba(12,12,12,0.3) 50%, rgba(12,12,12,0.6) 75%, rgba(12,12,12,0.8) 100%);
    z-index: -1;
  }
`;

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
      <ContactContainer>
        <App />
      </ContactContainer>
    </HashRouter>
  );
}