import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import axios from "axios";
import { PersistGate } from 'redux-persist/integration/react';
import "normalize.css";
import store from './redux_store/userSlice';
import {persistStore} from 'redux-persist';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://elice-kdt-2nd-team11.koreacentral.cloudapp.azure.com/api";
// axios.defaults.baseURL = "http://127.0.0.1:5000/api";

let persistor  = persistStore(store);
ReactDOM.render(
  <Provider store={ store }>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
document.getElementById('root')
);

reportWebVitals();
