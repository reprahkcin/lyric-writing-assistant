import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb8nZoo3LwrWHJB-uFCSlVLv3FsPIXMCI",
  authDomain: "lyric-writing-assistant.firebaseapp.com",
  projectId: "lyric-writing-assistant",
  storageBucket: "lyric-writing-assistant.firebasestorage.app",
  messagingSenderId: "550944326368",
  appId: "1:550944326368:web:3dd3fcd0009f72fef78685",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
