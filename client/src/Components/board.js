import React, { memo, useEffect, useRef } from 'react';
import {useBoard} from "./useBoard";

const Board = ({user}) => {

    const [display, score, onKeyDown, lineCount] = useBoard(user);
    const eBoard = useRef();

    const level = Math.floor(lineCount/10);

    useEffect(focusBoard, []);

    function focusBoard() {
        eBoard.current.focus();
    }

    return (
        <div ref={eBoard} className={'tetris-board'} tabIndex={0} onKeyDown={ onKeyDown }>
            <div>
                <span className="tetris-score-label">Level:</span>
                <span className="tetris-score-label">{level.toLocaleString()}</span>
                <span className="tetris-score-label">Score:</span>
                <span className="tetris-score-label">{score.toLocaleString()}</span>
            </div>
            {display.map( (row, index) => <Row row={row} key={index}/>)}
        </div>
    );
};


//generates each row
const Row = memo( props => {
    return (
        <span className='tetris-row'>
            {props.row.map( (cell, index) => <Cell cell={cell} key={index}/>)}
        </span>
    );
});

const Cell = memo( props => {
    const count = useRef(0);

    count.current++;

    const value = props.cell ? props.cell : 0;
    return (
        <span className={`tetris-cell tetris-cell-${value}`}></span>
    );
});

export default memo(Board);