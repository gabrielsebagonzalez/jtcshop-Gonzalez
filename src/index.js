import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQ-SYKRR7dLKVZ9SMJTUNoG0AUC9Too0",
  authDomain: "coderhouse-ecommerce-ad7ec.firebaseapp.com",
  projectId: "coderhouse-ecommerce-ad7ec",
  storageBucket: "coderhouse-ecommerce-ad7ec.appspot.com",
  messagingSenderId: "625322188065",
  appId: "1:625322188065:web:603ceeabe89d99bc22b260"
};

// Initialize Firebase
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
