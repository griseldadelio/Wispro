import firebaseAuth from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyApD9ZBNpzwJoMGw6wBqkTpz3rzNCAocCI",
    authDomain: "test-wispro-55796.firebaseapp.com",
    databaseURL: "https://test-wispro-55796-default-rtdb.firebaseio.com",
    projectId: "test-wispro-55796",
    storageBucket: "test-wispro-55796.appspot.com",
    messagingSenderId: "978029308594",
    appId: "1:978029308594:web:6130df3159e197dc2037ab",
    measurementId: "G-WEKXKLNN48"
};

firebaseAuth.initializeApp(firebaseConfig);
export { firebaseAuth };