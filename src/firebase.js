import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

/*const firebaseConfig = {
  apiKey: "AIzaSyAHExHfMDRu2lVecgYxgW86TXDF-dvsWrY",
  authDomain: "personal-finance-tracker-ec56e.firebaseapp.com",
  projectId: "personal-finance-tracker-ec56e",
  storageBucket: "personal-finance-tracker-ec56e.appspot.com",
  messagingSenderId: "669303047696",
  appId: "1:669303047696:web:5b4b41cc896752c03e6c95",
  measurementId: "G-7X36E69HYW",
};*///
const firebaseConfig = {
  apiKey: "AIzaSyDGNQ4mpwVaPjzmuwrjfv0b_2imHbsX2kU",
  authDomain: "priyanka-project-65272.firebaseapp.com",
  projectId: "priyanka-project-65272",
  storageBucket: "priyanka-project-65272.appspot.com",
  messagingSenderId: "769746936167",
  appId: "1:769746936167:web:c00774ba5295a4c9bf0fc2",
  measurementId: "G-833GW2QWKJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
// Import the functions you need from the SDKs you need
