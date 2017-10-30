import React from 'react';
import PropTypes from 'prop-types';
import './board.scss';

const Board = (props) => {
    let darkness = "board ";
    darkness += props.isDarkness
        ? "dark"
        : "light";
    const board = props
        .board
        .map((cell, i) => {
            let cellClass = "";
            let entity = props
                .entities
                .filter(entity => entity.x === cell.x && entity.y === cell.y);
            let player = props
                .entities
                .filter(entity => entity.type === "player")[0];
            let boss = props
                .entities
                .filter(entity => entity.type === "boss")[0];
            if (props.isDarkness) {
                if (cell.x <= (player.x + 4) && cell.x >= (player.x - 4) && cell.y >= (player.y - 4) && cell.y <= (player.y + 4)) {
                    cellClass = "light";
                } else {
                    cellClass = "dark";
                }
            }
            if (entity.length !== 0) {
                return <span
                    id={i}
                    x={entity[0].x}
                    y={entity[0].y}
                    key={i}
                    className={cellClass !== "light" && props.isDarkness
                    ? ""
                    : entity[0].type}></span>
            } else {
                return <span
                    id={i}
                    x={cell.x}
                    y={cell.y}
                    key={i}
                    className={cellClass !== "light" && props.isDarkness
                    ? ""
                    : cell.type}></span>
            }
        });
    return (
        <div className ={darkness} tabIndex="0">
            {board}
        </div>
    );
};
export default Board;
Board.propTypes = {
    isDarkness: PropTypes.bool.isRequired,
    board: PropTypes.array.isRequired
};