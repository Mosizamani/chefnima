import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen);
}

return (
    <nav className="navbar">
    <div className="logo">
        <Link to="/"><img src="" alt="Logo" className="logo-image" /></Link>
    </div>
    <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/menu" onClick={toggleMenu}>Menu</Link>
        <Link to="/booking" onClick={toggleMenu}>Booking</Link>
        <Link to="/upcoming" onClick={toggleMenu}>Upcoming</Link>
        <Link to="/private-events" onClick={toggleMenu}>Private Events</Link>
        <Link to="/find-us" onClick={toggleMenu}>Find Us</Link>
    </div>
    </nav>
)
}

export default Navbar
