import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {Provider} from 'react-redux'
import store from './Store';
import { SnackbarProvider } from 'notistack';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
       <SnackbarProvider  
       autoHideDuration={2000}
       anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
       maxSnack={2}
       >
         <App />
      </SnackbarProvider> 
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
