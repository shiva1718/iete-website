import logo from './logo.svg';
import './App.css';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";

import {Routes, Route} from 'react-router-dom';

function App() {
  return <Routes>
    <Routes path="/" element={<Home />} />
    <Routes path="/about" element={<About />} />
    <Routes path="/committee" element={<Committee />} />
    <Routes path="/events" element={<Events />} />
    <Routes path="/membership" element={<Membership />} />
    <Route path="/newsletter" element={<Newsletter />}/>
    <Routes path="/contact" element={<Contact />} />
  </Routes>
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
