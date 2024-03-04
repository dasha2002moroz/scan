import "@styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import { Provider } from 'react-redux';
import { store, persistor } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(PersistGate, {
  loading: null,
  persistor: persistor
}, /*#__PURE__*/React.createElement(App, null))))));