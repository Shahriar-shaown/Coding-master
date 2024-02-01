import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const UserContext = ({children}) => {
    const [user, setUser] = useState([])
    const [loading,setLoading] = useState(true)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const githubSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)
                setLoading(false)
            })
            return ()=>unsubscribe();
    },[])

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {user,createUser,loading,setLoading,verifyEmail,logInUser,googleSignIn,logOut,githubSignIn,updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;