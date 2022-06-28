import { useEffect, useState } from 'react'
import { useBoard } from './useBoard';

function Leaderboard({ user }) {
    const [userBoard, setUserBoard] = useState([]);
    const [locationBoard, setLocationBoard] = useState([]);

    var locationLeaderBoard = [];
    for (var i = 0; i < locationBoard.length; i++) {
        var location_points = 0;
        for (var j = 0; j < locationBoard[i].points.length; j++) {
            location_points += locationBoard[i].points[j].point_total;
        }
        locationLeaderBoard.push({
            location_name: locationBoard[i].location_name,
            points: location_points
        })
    }

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

    locationLeaderBoard.sort(function (a, b) {
        return b.points - a.points;
    })

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
        var location = document.createTextNode(locationLeaderBoard[i].location_name);
        var score = document.createTextNode(locationLeaderBoard[i].points);
        td1.appendChild(location);
        td2.appendChild(score);
        tr.appendChild(td1);
        tr.appendChild(td2);

        leaderTableBody.appendChild(tr);
        leaderTable.appendChild(leaderTableBody);
    }

    return (
        <>
            <h2>High Scores</h2>
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
