import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to='/'>Game</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard'>Leaderboard</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;