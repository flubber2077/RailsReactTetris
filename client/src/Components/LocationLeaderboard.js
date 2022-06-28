import { useEffect, useState } from 'react'

export default function LocationLeaderboard() {

    const [locationBoard, setLocationBoard] = useState([]);

    useEffect(() => {
        fetch('/locations')
            .then((response) => response.json())
            .then((json) => {
                setLocationBoard(json);
            })
    }, []);


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

    locationLeaderBoard.sort(function (a, b) {
        return b.points - a.points;
    })

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
        <table id="locationboard" className="table">
            <tr>
                <th>Location</th>
                <th>Points</th>
            </tr>
        </table>
    )
}