import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

//import firebase config file
import firebaseConfig from './firebaseConfig'

let db;
let auth;
let storageRef;



let init = () => {
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

let updateUserProd = (uid, prodid) => {
    console.log("updatUserProd : ", uid, prodid)

    return db.collection('users').doc(uid).get()
        .then((docRef) => {
            return docRef.data()
        })
        .then((data) => {
            if (data && data.prods) {
                data.prods.push(prodid)
            }
            return data
        })
        .then((data) => {
            console.log(data);
            return db.collection('users').doc(uid).set(data)
        })
}

let uploadProd = (name, desc, price, file, phone, mail, cats, setInfo) => {

    // return updateUserProd(firebase.auth().currentUser.uid, "03248k90i9423")

    setInfo("started")
    let imgUrl;

    if (!firebase.auth().currentUser) {
        return Promise.reject(("Not Logged in or Cannot resolve creditials \nLogin from home again "))
    }

    let imageRef = storageRef.child(`${firebase.auth().currentUser.uid}/${name}${file}`)
    return imageRef.put(file)
        .then((snapShot) => {
            setInfo("Uploading Image")
            return snapShot.ref.getDownloadURL()
        })
        .then(url => {
            imgUrl = url
            return url
        })
        .then((url) => {
            setInfo("Getting User Info")
            return getUser(firebase.auth().currentUser.uid)
        })
        .then((user) => {
            return user.name
        })
        .then((userName) => {
            console.log("user: ", userName);
            console.log("imgurl : ", imgUrl);
            setInfo("upLoading user Data")
            return db.collection('products').add({
                name: name,
                desc: desc,
                price: price,
                phone: phone,
                mail: mail,
                cats: cats,
                userID: firebase.auth().currentUser.uid,
                userName: userName,
                imageUrl: imgUrl,
                date: new Date()
            })
        })
        .then((docRef) => {
            setInfo("Updating user details")
            return updateUserProd(firebase.auth().currentUser.uid, docRef.id)
        })
}


let getProducts = (cats) => {
    if (!cats) {
        return db.collection('products').get()
            .then((snapshot) => {
                let data = []
                snapshot.forEach((doc) => {
                    let prod = doc.data()
                    prod._id = doc.id;
                    data.push(prod);
                })
                return data
            })
    }

    return db.collection('products').where("cats", "array-contains", cats).get()
        .then((snapshot) => {
            let data = []
            snapshot.forEach((doc) => {
                data.push(doc.data());
            })
            return data
        })

}

let getSingleProd = (id) => {
    return db.collection('products').doc(id).get()
        .then((doc) => {
            return doc.data()
        })
}

let userProds = (prods) => {

    let getData = async () => {
        let out = []

        for (let key in prods) {
            let docRef = await db.collection('products').doc(prods[key]).get()
            let data = await docRef.data()
            out.push(data)
        }
        return out;
    }
    return getData();
}

let out = { init, signUp, logOut, signIn, getUser, genUser, uploadProd, getProducts, userProds, getSingleProd }
export default out