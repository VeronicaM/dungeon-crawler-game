import React from 'react';
import './board.scss';

const Board = (props) => {
    let darkness = "board ";
    darkness += props.isDarkness ? "dark" : "light";
    const board = props.board.map((cell,i)=> <span key={i} className={props.isDarkness ? "":cell.type}> </span>);
    return (
        <div className ={darkness}>
           {board}
        </div>
    );
}
export default Board;