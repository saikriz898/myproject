import React from "react";
import { HeaderContainer } from "./header-style";
function Header() {
    return (
        <HeaderContainer>
            <nav className="navbar">
                <div className="nav-center">
                    <a href="#home">Home</a>
                    <a href="#about">Courses</a>
                    <a href="#services">Workshops</a>
                    <a href="#contact">Crash Courses</a>
                </div>
                <div className="nav-right">
                    <button className="cart"></button>
                    <button className="login">Login</button>
                </div>
            </nav>
        </HeaderContainer>
    );
};

export default Header;