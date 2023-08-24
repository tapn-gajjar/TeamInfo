import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom/client";
import store,{persistor} from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {HashRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
</Router>
</React.StrictMode>


);


