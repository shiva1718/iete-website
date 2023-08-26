import NavBar from "./NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/About";
import Committee from "./pages/Committee";
import Events from "./pages/Events"
import Membership from "./pages/Membership"
import Contact from "./pages/Contact";

function Nav() {
    return (
        <>
            <Router>
                <NavBar />

                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/committee" element={<Committee />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/membership" element={<Membership />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default Nav;