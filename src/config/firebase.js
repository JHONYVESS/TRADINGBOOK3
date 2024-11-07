// Firebase configuration and initialization
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBGzdXerQK4AM52SWE_QUlG1XIrwwO2yPY',
  authDomain: 'trading-book-3a687.firebaseapp.com',
  projectId: 'trading-book-3a687',
  storageBucket: 'trading-book-3a687.firebasestorage.app',
  messagingSenderId: '950163170201',
  appId: '1:950163170201:web:67ed759db2e89b2453a908',
  measurementId: 'G-Y4ZJK5KYRK',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);