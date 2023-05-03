import { useContextAuth } from "@/hooks/useAuthUser";
import { app } from "./firebase";

import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

const fnLogin = async (email: string, senha: string) => {
    try {
        const userCredential  = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        console.log("Logged in as:", user);
    } catch (error) {
        console.error("Error signing in:", error);
    }
}

const fnLogout = () => {
    signOut(auth);
}

export {
    db,
    auth,
    fnLogin,
    fnLogout
}