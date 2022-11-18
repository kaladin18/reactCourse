import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';


const firebaseConfig = {
  apiKey: "AIzaSyBohYXO2ZItUEeLkEb5Q8NwNwMMXFxVQsI",
  authDomain: "alexandria-86a5d.firebaseapp.com",
  projectId: "alexandria-86a5d",
  storageBucket: "alexandria-86a5d.appspot.com",
  messagingSenderId: "347957656566",
  appId: "1:347957656566:web:0632981a5e55799381e5d7"
};
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
