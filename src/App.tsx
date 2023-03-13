import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Landing/LandingPage';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
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
