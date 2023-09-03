// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

// replace console.* for disable log on production
if (import.meta.env.PROD) {
  console.log = () => {
    /**/
  };
  console.error = () => {
    /**/
  };
  console.debug = () => {
    /**/
  };
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
