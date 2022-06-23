import { useEffect, useState } from 'react'
import Board from "./board.js";
import NavBar from "./NavBar.js";
import '../App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Login from './LogIn'

function App() {
    const [errors, setErrors] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     fetch('/authorized_user')
    //         .then((res) => {
    //             if (res.ok) {
    //                 res.json()
    //                     .then((user) => {
    //                         setIsAuthenticated(true);
    //                         setUser(user);
    //                     });
    //             }
    //         });
    //     fetch('/game')
    //         .then(res => res.json())
    //         .then();
    // }, [])

    // function handlePost(obj) {
    //     fetch('/game', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(obj)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.errors) {
    //                 setErrors(data.errors)
    //             } else {
    //                 return (<StartMenu />)
    //             }
    //         })
    // }



    // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

    return (
        <div>
            <header>
                <h1>tetr.js</h1>
                <h2>by <a href="https://github.com/montgomerykate">K. Montgomery</a> and <a href="https://github.com/flubber2077">D. Jordan</a></h2>
                <NavBar />
            </header>

            <Routes>
                <Route path="/" element={
                    <div>
                        <Login />
                    </div>
                } />
                <Route path="/game" element={<Board className="tetris-parent" />} />
                <Route path='/start' element={<StartMenu />} />
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