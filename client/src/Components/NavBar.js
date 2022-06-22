import React from "react";
import { Route, Switch, NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <nav class="navbar">
            <ul>
                <li>
                    <NavLink to='/game'>Game</NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard'>Leaderboard</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Login</NavLink>
                </li>
            </ul>

        </nav>
    );
}

export default NavBar;