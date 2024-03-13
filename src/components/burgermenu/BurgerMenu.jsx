import { useState } from "react";
import './burgermenu.css'
import { NavLink } from "react-router-dom";
function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            setIsOpen(false)
        };
    }
    return (
        <div className="burger-menu-container">
            <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {isOpen && (
                <div className="menu-items">
                    {/* Add your menu items here */}
                    <NavLink to='' onClick={handleClick}>Početna</NavLink>
                    <NavLink to="/about" onClick={handleClick}>O nama</NavLink>
                    <NavLink to='/galerija' onClick={handleClick}>Galerija</NavLink>
                    <NavLink to='/modal' onClick={handleClick}>Kontakt</NavLink>
                </div>
            )}
        </div>
    );
};


export default BurgerMenu