import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './style/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)