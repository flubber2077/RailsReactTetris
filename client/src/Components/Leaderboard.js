import { useEffect, useState } from 'react'
import LocationLeaderboard from './LocationLeaderboard.js';

function Leaderboard({ user }) {
    const [userBoard, setUserBoard] = useState([]);

    useEffect(() => {
        fetch('/points')
            .then((response) => response.json())
            .then((json) => {
                setUserBoard(json);
            })
    }, []);

    userBoard.sort(function (a, b) {
        return b.point_total - a.point_total;
    })

    var userTable = document.getElementById('userboard');
    var userTableBody = document.createElement("tbody");

    var position = 1;
    for (var i = 0; i < userBoard.length; i++) {
        if (userBoard[i].username != null && userBoard[i].point_total != 0) {
            var tr = document.createElement("tr");
            var tdnum = document.createElement("td");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var place = document.createTextNode(position++);
            var username = document.createTextNode(userBoard[i].username);
            var score = document.createTextNode(userBoard[i].point_total);
            tdnum.appendChild(place);
            td1.appendChild(username);
            td2.appendChild(score);
            tr.appendChild(tdnum);
            tr.appendChild(td1);
            tr.appendChild(td2);

            userTableBody.appendChild(tr);
            userTable.appendChild(userTableBody);
        }
    }

    return (
        <>
            <h2>High Scores</h2>
            <div id='tableContainer'>
                <table id="userboard" className="table">
                    <tr>
                        <th></th>
                        <th>Users</th>
                        <th>Points</th>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Leaderboard;
