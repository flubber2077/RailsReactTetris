import { useEffect, useState } from 'react'
import { useBoard } from './useBoard';

function Leaderboard() {
    const [userBoard, setUserBoard] = useState([]);

    useEffect(() => {
        fetch('/users')
            .then((response) => response.json())
            .then((json) => {
                setUserBoard(json);
            })
    }, []);

    var userTable = document.getElementById('userboard');
    var userTableBody = document.createElement("tbody");

    for (var i = 0; i < userBoard.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var username = document.createTextNode(userBoard[i].username);
        td1.appendChild(username);
        tr.appendChild(td1);
        userTableBody.appendChild(tr);
        userTable.appendChild(userTableBody);
    }

    return (
        <>
            <h1>High Scores</h1>
            <div id='tableContainer'>
                <table id="userboard" className="table">
                    <tr>
                        <th>Users</th>
                        <th>Points</th>
                    </tr>
                </table>
                <table id="locationboard" className="table">
                    <tr>
                        <th>Location</th>
                        <th>Points</th>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Leaderboard;