import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const app = firebase.initializeApp({
  apiKey: "AIzaSyCTuueEgsy8_x01RZU9kCOgQUkfz7Juv00",
  authDomain: "auctionner-33ccb.firebaseapp.com",
  projectId: "auctionner-33ccb",
  storageBucket: "auctionner-33ccb.appspot.com",
  messagingSenderId: "228008355064",
  appId: "1:228008355064:web:64d812c8f240fb2f44c70d",
});
export const timestamp = firebase.firestore.FieldValue.serverTimestap;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
