import React from 'react';
import './board.scss';

const Board = (props) => {
    let darkness = "board ";
    darkness += props.isDarkness ? "dark" : "light";
    return (
        <div className ={darkness}>
            <span> Testing here </span>    
            <span> Testing here </span>
            <span> Testing here </span>
        </div>
    );
}
export default Board;