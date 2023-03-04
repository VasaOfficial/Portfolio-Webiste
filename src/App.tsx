import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Landing/LandingPage';
import NotFound from './Pages/NotFound';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
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
