import React from 'react';
import PropTypes from 'prop-types';
import './board.scss';

const Board = (props) => {
    let darkness = "board ";
    darkness += props.isDarkness ? "dark" : "light";
    const board = props.board.map((cell,i)=> <span id={i} x={cell.x} y={cell.y} key={i} className={props.isDarkness ? "":cell.type}> </span>);
    return (
        <div className ={darkness} tabIndex="0" onKeyDown={(e)=>props.onPlayerMove(e)}>
           {board}
        </div>
    );
};
export default Board;
Board.propTypes = {
    isDarkness:PropTypes.bool.isRequired,
    board: PropTypes.array.isRequired
};