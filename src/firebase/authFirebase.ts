import { app } from "./firebase";
import { signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

const auth = getAuth(app);
// const firestore = firebaseAdmin.firestore();

const fnLogin = async (email: string, senha: string) => {
    try {
        const userCredential  = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error("Error signing in:", error);
    }
}

const fnLogout = () => {
    signOut(auth);
}

export {
    auth,
    fnLogin,
    fnLogout
}