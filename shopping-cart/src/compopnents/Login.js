import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import { loginSuccess } from "../redux/actions/action";
import { auth, authProvider } from "./firebase";
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';



//const authProvider = new firebase.auth.GoogleAuthProvider();
console.log("before login")
const Login = () => {
  const navigate=useNavigate();
    

  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(authProvider)
      .then((result) => {
        const user = result.user;
        dispatch(loginSuccess(user));
        navigate("/home");
       
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login-container">
      <div className="login">
        <img
          src="./cart.gif"
          alt="kart-logo"
        />
        <h2>🍉🍇Welcome to AP's FoodyKart 🍕🌮</h2>
        <button onClick={signIn}> 
        <GoogleIcon style={{color:"white"}} className="mb-1"/>
        Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
