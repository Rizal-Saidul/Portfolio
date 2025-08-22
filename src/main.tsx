"use client"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import ComingSoon from './cooming-soon/page';
import './index.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <ComingSoon/> */}
  </StrictMode>
);
