import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (user,name, url)=>{
        return updateProfile(user, name, url)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider)
    };
    const githubSignIn = ()=>{
        return signInWithPopup(auth, githubProvider)
    }
    const authInfo = {
        createUser,
        profileUpdate,
        signIn,
        googleSignIn,
        githubSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;