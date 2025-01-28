import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import '@fontsource/poppins/100.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/400-italic.css';

import '@fontsource/poppins/500.css';

import '@fontsource/poppins/600.css';
import '@fontsource/poppins/600-italic.css';

import '@fontsource/poppins/700.css';
import '@fontsource/poppins/700-italic.css';

import '@fontsource/poppins/800.css';

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
