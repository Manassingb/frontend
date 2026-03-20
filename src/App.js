import './App.css';
import About from './Component/About';
import NavBar from './Component/NavBar';
/* import TextBlock from './Component/TextBlock'; */


function App() {
  return (
    <>

      <NavBar titel="MenuBar" about="About"/>
      {/* <NavBar/> */}
      {/* <TextBlock heading='Text area:' Text='Enter the text' clearText='Clear'/> */}

      <About/>
    
    </>
  );
}




export default App;
