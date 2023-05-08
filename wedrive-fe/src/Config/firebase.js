import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfCHH1Bx2jhMrK0ijMvdbdgvO0fBASPA8",
  authDomain: "crud-c7f1f.firebaseapp.com",
  projectId: "crud-c7f1f",
  storageBucket: "crud-c7f1f.appspot.com",
  messagingSenderId: "908200964474",
  appId: "1:908200964474:web:9423b5b3b918e1296566c3",
  measurementId: "G-GFCR703M42"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

const storage = getStorage(app);

export { storage };



//export default { app, db }