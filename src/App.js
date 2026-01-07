//import logo from './logo.svg';
import './App.css';

import About from './component/About';
import Mainbanner from './component/mainbanner';
import Alert from './component/Alert';
// import MyUppercase from './component/myuppercase';
import Navbar from './component/navbar';
import TextForm from './component/textform';

import React, {useState} from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText]= useState('Dark Mode Enable')
  const [alert, setAlert] = useState(null)

  const showAlert = (massage, type ) => {
    setAlert({
      msg:massage,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }

  const toggleMode = () => {
      if(mode === 'light')
      {
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        setToggleText('Light Mode Enable')
        showAlert("Dark mode has been enabled", "success");
      }

      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setToggleText('Dark Mode Enable')
        showAlert("Light mode has been enabled", "success");
      }
  }



  return (
    <div>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} toggleText={toggleText} />
        <Alert alert={alert}/>
        {/* <Mainbanner name="Test" subheading="This is Subheading" mode={mode}/> */}
        <Switch>
            <Route exact path="/">
              <TextForm textarea_lable="This is Text Case Converter" mode={mode}/>
            </Route>
          
          <Route exact path="/about">
            { <About theme_title='About Us'  mode={mode}/>}
          </Route>

              {/* <MyUppercase uppercaseheading="This Uppercase com"/> */}

        </Switch>

        
      </Router>

      
    </div>
  );
}

export default App;
