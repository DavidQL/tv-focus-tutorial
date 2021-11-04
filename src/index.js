import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );  
}
let script;

if(window._cordovaNative) {
  script = document.createElement('script');
  script.onload = function () {
    document.addEventListener('deviceready', startApp, false)
  };
  script.src = 'cordova.js';

  document.head.appendChild(script); 
  document.querySelector('body').classList.add('cordova');
} else {
  startApp()
} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
