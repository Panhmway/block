import firebase from "firebase/app";
// import { firebase } from "@firebase/app";
// import { Firebase } from 'firebase/app'
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyARUjvYgVRl-5JscXMk7lmkrZxVM5P5j8w",
    authDomain: "vue-blog-system-2fb09.firebaseapp.com",
    projectId: "vue-blog-system-2fb09",
    storageBucket: "vue-blog-system-2fb09.appspot.com",
    messagingSenderId: "453517006043",
    appId: "1:453517006043:web:ac2ec7d15cb77b1ca328fe"
  };

  firebase.initializeApp(firebaseConfig)

  let db=firebase.firestore();

  export {db};