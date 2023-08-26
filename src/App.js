import logo from './logo.svg';
import './App.css';

// Pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Committee from "./pages/committee/Committee";
import Events from "./pages/events/Events";
import Membership from "./pages/membership/Membership";
import Newsletter from "./pages/newsletter/Newsletter";
import Contact from "./pages/contacts/Contact";

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/committee" element={<Committee/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/membership" element={<Membership/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
  </>;
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
