import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

let db;
let auth;
let storageRef;


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
    storageRef = firebase.storage().ref()

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

let getUser = (uid) => {
    return db.collection('users').doc(uid).get()
        .then((doc) => {
            if (doc) {
                return doc.data()
            }
            throw new Error("No user")
        })
        .catch(err => err)
}

let genUser = (uid, name) => {
    return db.collection('users').doc(uid).set({
        name: name,
        uid: uid,
        prods: [],
        cart: [],
        sell: 0
    })
}

let uploadProd = (name, desc, price, file, phone, mail, cats) => {
    console.log("ran upload")
    let imageRef = storageRef.child(`${firebase.auth().currentUser.uid}/${name}${file}`)
    return imageRef.put(file)
        .then((snapShot) => {
            return snapShot.ref.getDownloadURL()
        })
        .then(url => {
            return url
        })
        .then((url) => {
            return getUser(firebase.auth().currentUser.uid)
                .then((user) => {
                    console.log("user");
                    return user.name
                }).then((userName) => {
                    console.log("userName");
                    return db.collection('products').add({
                        name: name,
                        desc: desc,
                        price: price,
                        phone: phone,
                        mail: mail,
                        cats: cats,
                        userID: firebase.auth().currentUser.uid,
                        userName: userName,
                        imageUrl: url,
                        date: new Date()
                    })
                })
                .then((obj) => {
                    return obj
                })
        })



}


let out = { init, signUp, logOut, signIn, getUser, genUser, uploadProd }
export default out