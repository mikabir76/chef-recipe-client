import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const profileUpdate = (user,name, url)=>{
        setLoading(true)
        return updateProfile(user, name, url)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    };
    const githubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    };
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
                setLoading(false)
        })
        return ()=> unsubscribe()
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        profileUpdate,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;