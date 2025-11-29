//import logo from './logo.svg';
import './App.css';
//import About from './component/About';
import Mainbanner from './component/mainbanner';
// import MyUppercase from './component/myuppercase';
import Navbar from './component/navbar';
import TextForm from './component/textform';
import React, {useState} from 'react';



function App() {

  const [mode, setMode] = useState('light');
  const [toggleText, setToggleText]= useState('Dark Mode Enable')


  const toggleMode = () => {
      if(mode === 'light')
      {
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        setToggleText('Light Mode Enable')
      }

      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        setToggleText('Dark Mode Enable')
      }
  }

  

  return (
    <div>
      <Navbar toggleMode={toggleMode} mode={mode} toggleText={toggleText}/>
      <Mainbanner name="Test" subheading="This is Subheading" mode={mode}/>
      <TextForm textarea_lable="This is Text Case Converter" mode={mode}/>
      {/* <MyUppercase uppercaseheading="This Uppercase com"/> */}
      {/* <About theme_title='Theme Mode'/> */}
    </div>
  );
}

export default App;
