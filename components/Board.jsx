import React from 'react';
import PropTypes from 'prop-types';
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
};
export default Board;
Board.propTypes = {
    isDarkness:PropTypes.bool.isRequired,
    board: PropTypes.array.isRequired
};