import React, {useContext, useEffect, useState} from 'react'
import  { auth } from '../firebase'

const AuthContext = React.createContext();

//custom hook to provide auth context defined up there 
//use it to watch auth state changes and 
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true);

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function signin(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signout(){
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user);
            setLoading(false); // to manage the state of authentication before rendering any children in our AuthContext  
        });
        return unsubscribe;
    }, []);

   
    const value = {
        currentUser, 
        signup,
        signin,
        signout
    }
    
    return (
        <AuthContext.Provider value={ value }>
            {!loading && children}
        </AuthContext.Provider>        
    )
}
