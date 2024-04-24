import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// importing css
import "./style/globals.css";
import "./style/parallax.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
