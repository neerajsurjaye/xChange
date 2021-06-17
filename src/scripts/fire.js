import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

let db;
let auth;



let init = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyApDx7ECIGFkFRyjEmEy_hRMZqUQg9UlhI",
        authDomain: "xchange-b68f6.firebaseapp.com",
        projectId: "xchange-b68f6",
        storageBucket: "xchange-b68f6.appspot.com",
        messagingSenderId: "508182359720",
        appId: "1:508182359720:web:e7520f637c0d9e09fb9c9d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    db = firebase.firestore();
    auth = firebase.auth();

}

let signUp = (mail, pass) => {
    return auth.createUserWithEmailAndPassword(mail, pass)
}

let logOut = () => {
    return auth.signOut()
}

let signIn = (mail, pass) => {
    return auth.signInWithEmailAndPassword(mail, pass)
}

let getUser = () => {
    return db.collection('users').get()
        .then(snapshot => {
            let data = []
            snapshot.forEach((doc) => {
                // console.log(doc.data());
                data.push(doc.data())
            })
            return data
        })
}


let out = { init, signUp, logOut, signIn, getUser }
export default out