import "./App.css";
import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import React, { useState } from 'react'
import Alert from "./componenets/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success");
    }
  }


  return (
    <>
    <Router>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3 w-75">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Textutils -Word and Character manipulation" mode={mode}/>} /> 
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
