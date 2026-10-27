import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import profileImage from "./assets/Profileimage.jpg";

let favicon = document.querySelector('link[rel="icon"]');

if (!favicon) {
  favicon = document.createElement("link");
  favicon.rel = "icon";
  document.head.appendChild(favicon);
}

favicon.removeAttribute("type");
favicon.href = profileImage;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
