import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from './redux/actions/action';
import Header from './compopnents/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './compopnents/Cards';
import CardsDetails from './compopnents/CardsDetails';
import { Routes, Route } from "react-router-dom";
import Login from './compopnents/Login';
import { auth } from './compopnents/firebase';
import { useState } from 'react';


const App = () => {
  console.log("Entered in App.js")
  const [user,setUser]= useState(null);
const dispatch = useDispatch();
//const user = useSelector(state => state.user);




useEffect(() => {
  auth.onAuthStateChanged(user => {
        if (user) {
            dispatch(loginSuccess(user));
            console.log("user inside if",user)
             setUser(user.displayName)
        }
    });
}, [dispatch]);


return (
    <>
        <Header />
        {!user ? <Login /> : (
            <Routes>
                <Route path='/home' element={<Cards />} />
                <Route path="/login" element={<Login />} />
                <Route path='/cart/:id' element={<CardsDetails />} />
            </Routes>
        )}
    </>
);
}

export default App;



