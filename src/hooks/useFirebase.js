import initializationApp from "../Firebase/firebase.init";
import { } from 'firebase/app';
import {
    getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut
    , createUserWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";

initializationApp();

const useFirebase = () => {
    const [user, setUser] = useState();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }
    //observe user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }
    return {
        user,
        googleSignIn,
        logOut,
        createUser
    }
}
export default useFirebase;