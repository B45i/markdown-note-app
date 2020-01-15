import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB29IQ4p60DMC0q20BcnzCDIYzDdjAojKo",
    authDomain: "react-firebase-note.firebaseapp.com",
    databaseURL: "https://react-firebase-note.firebaseio.com",
    projectId: "react-firebase-note",
    storageBucket: "react-firebase-note.appspot.com",
    messagingSenderId: "556060713782",
    appId: "1:556060713782:web:1c8cdda7f2d81674264997",
    measurementId: "G-XXJD95JT6L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos")