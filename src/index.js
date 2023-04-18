import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './style/main.css'
import { TodosContext, Todos } from "./context/TodoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <TodosContext.Provider value={Todos}>
    <App />
    </TodosContext.Provider>
  </StrictMode>
)