import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebaseConfig";

import "./index.css";
console.log("firebaseConfig", firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root"),
);
