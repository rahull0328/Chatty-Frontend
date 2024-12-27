import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword ,getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCY5y-soFku8IvLbzZhs5MiKKgnIqS6JSI",
  authDomain: "chatloom-d0103.firebaseapp.com",
  projectId: "chatloom-d0103",
  storageBucket: "chatloom-d0103.firebasestorage.app",
  messagingSenderId: "588635725931",
  appId: "1:588635725931:web:3bde9fb683c4ac776b512e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


//whenever user creates an account this two document will be added by-default
const signup = async (username, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        //user document
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Heyyy there, I'm Using ChatLoom !",
            lastSeen: Date.now()
        })
        //chat-data
        await setDoc(doc(db, "chats", user.uid), {
            chatData: []
        })
        return user;
    } catch (error) {
        console.error(error);
        toast.error(error.code);
    }
}

export {signup}