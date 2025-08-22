import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './App.tsx';
import './index.css';
import ComingSoon from './cooming-soon/page';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <ComingSoon/>
  </StrictMode>
);
