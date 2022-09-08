// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');  // Wheater dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) => {
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0 0 0)';
      showAlert('Dark Mode has been enabled', "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now '
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode has been enabled', "success");
      document.title = 'TextUtils - Light Mode';
    }
  }


  const blueMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(21 33 64)';
      showAlert('Blue Mode has been enabled', "success");
      document.title = 'TextUtils - Blue Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode has been enabled', "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  

  return (
    <>
    
      {/* <Navbar title="TextUtils" aboutText = "This is about" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} blueMode={blueMode}/>
        <Alert alert={alert}/>
        {/* <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode}  />} />
          </Routes>
        </div> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
