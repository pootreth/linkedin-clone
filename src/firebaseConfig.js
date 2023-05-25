// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA9kfzxGgiHVEihAkrPRZ6c-RCPMS-JSQ",
  authDomain: "linkedin-clone-72db3.firebaseapp.com",
  projectId: "linkedin-clone-72db3",
  storageBucket: "linkedin-clone-72db3.appspot.com",
  messagingSenderId: "236048354047",
  appId: "1:236048354047:web:65390ede49fa50a190daca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
