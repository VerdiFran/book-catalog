import firebase from 'firebase/app'
import 'firebase/firestore'

// Это нужно было бы хранить в конфигурационном файле или в каком-либо другом месте,
// однако для удобства демонстрации я не стала этого делать :)
const firebaseConfig = {
    apiKey: "AIzaSyD0RKcO5bl98v-1wghhHW2FekeBJPRs45I",
    authDomain: "book-catalog-2f1de.firebaseapp.com",
    projectId: "book-catalog-2f1de",
    storageBucket: "book-catalog-2f1de.appspot.com",
    messagingSenderId: "903054214147",
    appId: "1:903054214147:web:d6d2bf0bd90c770facfa36",
    measurementId: "G-NL00KFTKC5"
}

firebase.initializeApp(firebaseConfig)

export default firebase