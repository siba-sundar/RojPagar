// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken} from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWwr28dQJlCiIrNh-QHg07wwQmlfALUnA",
  authDomain: "rojpagar.firebaseapp.com",
  projectId: "rojpagar",
  storageBucket: "rojpagar.firebasestorage.app",
  messagingSenderId: "410533441161",
  appId: "1:410533441161:web:3342c9e3a41f2ab3a0a058",
  measurementId: "G-T6V92R9TJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export const generateToken = async ()=>{
    const permission = await Notification.requestPermission();
    console.log('====================================');
    console.log(permission);
    console.log('====================================');
    if(permission === "granted"){
        const token = await getToken(messaging, {
            vapidKey: "BP_BWwqlxyOHkfPhYIo3HUJ3KnWvXyD-PEsFTFoVY9W4qMBZf7LM_xMTBwFkFTlN8QvfueF5tHuVwb7y-L6wJOo"
        })
        console.log('====================================');
        console.log(token);
        console.log('====================================');
    }
   
}