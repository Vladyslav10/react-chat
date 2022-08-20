import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import {firebase} from '@firebase/app';
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJnhDpiLpBS2D0EKY9JfDRgxIJhlc8Exk",
  authDomain: "react-chat-4e853.firebaseapp.com",
  projectId: "react-chat-4e853",
  storageBucket: "react-chat-4e853.appspot.com",
  messagingSenderId: "246951993366",
  appId: "1:246951993366:web:ace5903febecdfee57d537",
  measurementId: "G-MVZ0YBQS7W"
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider> 
  </React.StrictMode>
);

