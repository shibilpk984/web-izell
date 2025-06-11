import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';     // Tailwind base styles
import './global.css';    // Your custom global styles
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
