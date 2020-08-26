import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBEFqj-HQsYImAouokAAFMqfJx4GQz0Q1s",
    authDomain: "fir-auth-acd1a.firebaseapp.com",
    databaseURL: "https://fir-auth-acd1a.firebaseio.com",
    projectId: "fir-auth-acd1a",
    storageBucket: "fir-auth-acd1a.appspot.com",
    messagingSenderId: "823243092547",
    appId: "1:823243092547:web:08166c37910a909807daf6",
    measurementId: "G-RETN558TYK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;