import React from 'react';
import ReactDOM from 'react-dom/client';//vdom implemented by this
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(             //presenting componets 
  <React.StrictMode>
    <App />           
  </React.StrictMode>
);//root componet of our project

reportWebVitals();
