import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVqYoFXwmLIy_xRvXtVYHMratGxhy4MRQ",
    authDomain: "filebase-upload.firebaseapp.com",
    projectId: "filebase-upload",
    storageBucket: "filebase-upload.appspot.com",
    messagingSenderId: "407096674865",
    appId: "1:407096674865:web:63fe465d6c7992882b2310",
    measurementId: "G-GYF0ZHD3N0"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);