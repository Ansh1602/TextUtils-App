// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";


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
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode has been enabled', "success");
    }
  }


  const blueMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(21 33 64)';
      showAlert('Blue Mode has been enabled', "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode has been enabled', "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText = "This is about" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} blueMode={blueMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        {/* <About mode={mode} /> */}
      </div>
    </>
  );
}

export default App;
