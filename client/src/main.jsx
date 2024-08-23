import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";
import "antd/dist/reset.css";
createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <SearchProvider>
  <CartProvider>

  <BrowserRouter>
  {/* <StrictMode> */}
    <App />
  {/* </StrictMode> */}
  </BrowserRouter>
  </CartProvider>
  </SearchProvider>
  </AuthProvider>
)
