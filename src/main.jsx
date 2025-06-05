import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css'
import App from './App.jsx'

const clerkFrontendApi ='pk_test_Y2l2aWwtZ2xvd3dvcm0tOTcuY2xlcmsuYWNjb3VudHMuZGV2JA'

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkFrontendApi}>
  <StrictMode>
    <App />
  </StrictMode>
  </ClerkProvider>
);

// main.jsx or App.jsx
