import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCK5ZjM9GbrRcV6uSWKlL_0jVAilfMSOWI",
  authDomain: "agf-f-ed0ba.firebaseapp.com",
  projectId: "agf-f-ed0ba",
  storageBucket: "agf-f-ed0ba.appspot.com",
  messagingSenderId: "462600883678",
  appId: "1:462600883678:web:79d9c4f7c7d4d4e392614f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};