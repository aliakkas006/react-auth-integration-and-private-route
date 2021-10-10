import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const Githubrovider = new GithubAuthProvider();

    const auth = getAuth();

    // Sign in with Google:
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            }).catch(error => {
                setError(error.message);
            });
    }

    // Sign in with Github:
    const signInUsingGithub = () => {
        signInWithPopup(auth, Githubrovider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
            }).catch(error => {
                setError(error.message);
            });
    }

    // Sign out:
    const signedOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setUser(user);
            }
        })
    }, []);

    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        signedOut
    }
}

export default useFirebase;