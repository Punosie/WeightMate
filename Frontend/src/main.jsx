import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthProvider } from "./contexts/authContext";
// Pages
import App from './App.jsx'
import Login from './pages/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  </StrictMode>,
)
