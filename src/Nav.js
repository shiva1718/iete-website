import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About  from "./pages/about/About";
import Committee from "./pages/committee/Committee";
import Events from "./pages/events/Events"
import Membership from "./pages/membership/Membership"
import Contact from "./pages/contacts/Contact";
import Footer from "./components/footer/Footer";

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