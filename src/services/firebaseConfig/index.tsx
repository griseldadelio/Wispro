import firebaseAuth from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAXVjYbF2mm05LSimpFHze4p0nbhpmS8gs",
    authDomain: "wispro-32fb0.firebaseapp.com",
    projectId: "wispro-32fb0",
    storageBucket: "wispro-32fb0.appspot.com",
    messagingSenderId: "376968404746",
    appId: "1:376968404746:web:3b696f5d8f06b49a0fe4f3"
};

firebaseAuth.initializeApp(firebaseConfig);
export { firebaseAuth };