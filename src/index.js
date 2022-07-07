import React from "react";
import ReactDOM from "react-dom";

// React Router
import {BrowserRouter} from "react-router-dom";

// Redux
import {Provider} from "react-redux";
import {store} from "./store";

// Ant Design
import "antd/dist/antd.css";

// File Css
import "./index.css";

// Components
import App from "./App";

import reportWebVitals from "./reportWebVitals";
// Helmet
import {HelmetProvider} from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
