import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADeIfv19Ip03rcUEt6bTDRGsKo9DCalUg",
  authDomain: "cart-eb556.firebaseapp.com",
  projectId: "cart-eb556",
  storageBucket: "cart-eb556.appspot.com",
  messagingSenderId: "547308717268",
  appId: "1:547308717268:web:118c3193d011c9d68ce741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


