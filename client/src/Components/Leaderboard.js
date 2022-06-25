import { useEffect, useState } from 'react'

function Leaderboard() {
    const [userBoard, setUserBoard] = useState([]);

    useEffect(() => {
        fetch('localhost:3000/users')
            .then((response) => response.json())
            .then((json) => {
                setUserBoard(json);
            })
    })

    // var userTable = document.getElementById('userBoard');

    // for (var i = 0; i < userBoard.length; i++) {
    //     var row = userTable.insertRow(i);
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);

    //     cell1.innerHtML = userBoard[i].username;
    // }



    return (
        <>
            <h1>High Scores</h1>
            <div>
                <table id="userboard">
                    <tbody>
                        <tr>
                            <th>Users</th>
                            <th>Points</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Leaderboard;