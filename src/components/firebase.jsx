import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBVmD-pj2QM7YX2XOb_13hotrnIY4ThIYE",
    authDomain: "thecoffeecat-337ac.firebaseapp.com",
    databaseURL: "https://thecoffeecat-337ac-default-rtdb.firebaseio.com",
    projectId: "thecoffeecat-337ac",
    storageBucket: "thecoffeecat-337ac.appspot.com",
    messagingSenderId: "88520975317",
    appId: "1:88520975317:web:a4b818635db11fd4dd535c",
    measurementId: "G-E60V05D3P2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const dbs = getDatabase(app);
