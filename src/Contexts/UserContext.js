import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
export const AuthContext = createContext()

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const UserContext = ({children}) => {
    const [user, setUser] = useState([])
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
                setUser(currentUser)
            })
            return ()=>unsubscribe();
    },[])

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {user,createUser,logInUser,googleSignIn,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;