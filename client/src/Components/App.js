import { useEffect, useState } from 'react'
import Board from "./board.js";
import NavBar from "./NavBar.js";
import Leaderboard from "./Leaderboard.js";
import '../App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Login from './Login.js';
import Auth from './Auth.js'
import About from './About.js';

function App() {

    return (
        <div>
            <header>
                <h1>tetr.js</h1>
                <h2>by <a href="https://github.com/montgomerykate">K. Montgomery</a> and <a href="https://github.com/flubber2077">D. Jordan</a></h2>
                <NavBar />
            </header>


            <Routes>
                <Route path="/game" element={<Board className="tetris-parent"/>} />
                <Route path='/' element={<StartMenu />} />
                <Route path='/leaderboard' element={<Leaderboard/>} />
                {/* <Route path='/signup' element={<Auth handlePost={handlePost} />} /> */}
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );

    function StartMenu() {
        return (
            <div className='start-button'>
                <NavLink to='/game'>
                    START
                </NavLink>
                <h4>Controls</h4>
                <p>Left/Right: Move</p>
                <p>Up: Rotate</p>
                <p>Down: Advance</p>
                <p>Complete rows in order to clear them, clear four rows at once for the most points</p>
                <p>A block landing on the top row is Game Over</p>

            </div>
        )
    }
}

export default App;