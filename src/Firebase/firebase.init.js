import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const intializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default intializeAuthentication;

// Steps For Doing Authentication In Amazone App

/*
Initial Setups
    1.Firebase : Create project
    2.Create a web app
    3. Get Configuration From Firebase
    4.Intializa Firebase 
    5.Enable Authentication methods

Step - 2
    1.Create Login Component
    2.Create Register Component
    3.Create Route for Login and Register

Step- 3
    1.Google Authentication Adding
    2.Set up sign in method
    3.Set up sign out method
    4.User state
    5.Speacial Observer
    6.Return Necessery methods and states from useFirebase

Step - 4
    1.Create a auth context
    2.Create Context Provider
    3.Use Auth Provider
    4.Create useAuth hook
    5.Set Context value

*/