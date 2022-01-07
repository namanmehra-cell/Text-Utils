import Navbar from "./navbar";
import './App.css';
import TextArea from "./textarea";
 import About from "./about";
import React, { useState } from 'react'
import Alert from "./alert";
import Footer from "./footer";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


export default function App(){

    const [mode,setMode] = useState("light")
    const [type,setType] = useState("Switch to Dark")
    const [alert,setAlert]=useState(null)
    

    function showAlert(types){
        setAlert({
            type:types
        })
        setTimeout(()=>{
            setAlert(null);
        },1500)   // setTimeout required a function 
    }

    function switchMode(){
        if(mode==="light"){
            setMode("dark")
            setType("Switch to Light")
            document.body.style.backgroundColor='#322F3D';
            showAlert("Dark mode enable")
            document.title='TextUtils-Dark mode'
        }
        else{
            setMode("light")
            setType("Switch to Dark")
            document.body.style.backgroundColor='white';
            showAlert("Light mode enable")
            document.title='TextUtils-Light mode'
        }
    }

    return <>
    <Router>
    <Navbar about="About" home="Home" type={type} toogleSwitch={switchMode} mode={mode} />
    <Alert alert={alert}/>
    <div className="container my-5">
    
     <Routes>
        <Route exact path="/" element={<TextArea showAlert={showAlert} mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
     </Routes>

    </div>
    </Router>

    <Footer theme={mode} />
    </>

}