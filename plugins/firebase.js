import firebase from "firebase/app";
import "firebase/firestore";
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyBoCeQlXfcdXKXmSrPRL1tSHCJsSWDt61Q",
    authDomain: "tahirbattal-db.firebaseapp.com",
    databaseURL: "https://tahirbattal-db.firebaseio.com",
    projectId: "tahirbattal-db",
    storageBucket: "tahirbattal-db.appspot.com",
    messagingSenderId: "569866418282",
    appId: "1:569866418282:web:eb81eeef87f69afc4a3213",
    measurementId: "G-X9QR9EHLDH"
  };
  firebase.initializeApp(config);
}
const fireDb = firebase.firestore();
export { fireDb };
