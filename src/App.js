import { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => { 
    setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled!", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextArea showAlert={showAlert} heading="Enter your text below to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;