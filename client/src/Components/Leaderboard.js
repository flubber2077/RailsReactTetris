import { useEffect, useState } from 'react'
import { useBoard } from './useBoard';

function Leaderboard({user}) {
    const [userBoard, setUserBoard] = useState([]);
    const [locationBoard, setLocationBoard] = useState([]);

    const locoBoard = locationBoard.map(function (element) {
        return [element.location_name, element.points.reduce(
            (total, point) => total + point.point_total
        )]
    });

    useEffect(() => {
        fetch('/points')
            .then((response) => response.json())
            .then((json) => {
                setUserBoard(json);
                userBoard.sort(function(a, b) {
                    return parseFloat(a.point_total) - parseFloat(b.point_total);
                })
            })
    }, []);

    useEffect(() => {
        fetch('/locations')
            .then((response) => response.json())
            .then((json) => {
                setLocationBoard(json);
            })
    }, []);

    var userTable = document.getElementById('userboard');
    var userTableBody = document.createElement("tbody");

    for (var i = 0; i < userBoard.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var username = document.createTextNode(user[userBoard[i].user_id].username);
        var score = document.createTextNode(userBoard[i].point_total);
        td1.appendChild(username);
        td2.appendChild(score);
        tr.appendChild(td1);
        tr.appendChild(td2);
    
        userTableBody.appendChild(tr);
        userTable.appendChild(userTableBody);
    }

    var leaderTable = document.getElementById('locationboard');
    var leaderTableBody = document.createElement("tbody");

    for (var i = 0; i < locationBoard.length; i++) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var location = document.createTextNode(locationBoard[i].location_name);
        var score = document.createTextNode("0");
        td1.appendChild(location);
        td2.appendChild(score);
        tr.appendChild(td1);
        tr.appendChild(td2);

        leaderTableBody.appendChild(tr);
        leaderTable.appendChild(leaderTableBody);
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
