// import logo from './logo.svg';
import './App.css';
import NavBar from './Compnents/NavBar';
// import About from './Compnents/About';
import TextForm from './Compnents/TextForm';
import Alert from './Compnents/Alert';
import React, {useState} from 'react';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {

  const [mode, setMode] = useState('light') // wether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("You have successfully set the Dark Mode", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("You have successfully set the Light Mode", "success");
      document.title = 'TextUtils - Light Mode'; 
    }
  }
  return (
    <>
    
    <NavBar tittle="TextUtils" about="About Us" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container"> 

    {/* <BrowserRouter>
      <Routes>
          <Route path='/about' element={<About />} /> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/>} />
      </Routes>
    </BrowserRouter> */}


    <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode}/> 
    {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
