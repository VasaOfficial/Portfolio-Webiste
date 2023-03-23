import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
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
