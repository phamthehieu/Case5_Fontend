import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDJzBDLDihamLeDZOLInP_NUKKsWKAyB_Q",
    authDomain: "blog-825b4.firebaseapp.com",
    projectId: "blog-825b4",
    storageBucket: "blog-825b4.appspot.com",
    messagingSenderId: "1001719961993",
    appId: "1:1001719961993:web:c0b621fda298fdd56ae958",
    measurementId: "G-XBZG1QGVKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);