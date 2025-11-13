//import logo from './logo.svg';
import './App.css';
import Mainbanner from './component/mainbanner';
//  import MyUppercase from './component/myuppercase';
import Navbar from './component/navbar';
import TextForm from './component/textform';



function App() {
  return (
    <div>
      <Navbar/>
      <Mainbanner name="Sara" subheading="This is Subheading"/>
      <TextForm textarea_lable="This is Text Case Converter"/>
      {/* <MyUppercase uppercaseheading="This Uppercase com"/> */}
    </div>
  );
}

export default App;
