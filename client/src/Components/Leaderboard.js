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
        var td = document.createElement("td");
        var username = document.createTextNode(userBoard[i].username);
        td.appendChild(username);
        tr.appendChild(td);
        userTableBody.appendChild(tr);
        userTable.appendChild(userTableBody);
    }

    return (
        <>
            <h1>High Scores</h1>
            <div>
                <table id="userboard">
                    <tr>
                        <th>Users</th>
                        <th>Points</th>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Leaderboard;