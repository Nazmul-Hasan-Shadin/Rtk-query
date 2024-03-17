import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoO7dqs_nQznUOmGjXivrYlIqzL-GX90Y",
  authDomain: "task-master-redux-4a9c8.firebaseapp.com",
  projectId: "task-master-redux-4a9c8",
  storageBucket: "task-master-redux-4a9c8.appspot.com",
  messagingSenderId: "470771860753",
  appId: "1:470771860753:web:c653e6ca71998174ab78b0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
