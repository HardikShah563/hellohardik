import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "./style/parallax.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />

        {/* cursor follower */}
        <div className="cursor"></div>

        {/* stars background */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </React.StrictMode>,
)
