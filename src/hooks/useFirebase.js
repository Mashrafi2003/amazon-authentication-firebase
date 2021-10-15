import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged ,signOut } from "firebase/auth";
import intializeAuthentication from "../Firebase/firebase.init";

intializeAuthentication();
const useFirebase = () =>{
    const [user , setUser] = useState({});

    const auth = getAuth()
    const Googleprovider = new GoogleAuthProvider();

    const signinUsingGoogle = () =>{
        signInWithPopup(auth , Googleprovider)
        .then(result =>{
            console.log(result.user)
        })
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
           
        })
    },[])
    return{
        user,
        signinUsingGoogle, 
        logOut,


    }
}

export default useFirebase;



