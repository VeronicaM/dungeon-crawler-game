import React from 'react';
import PropTypes from 'prop-types';
import './board.scss';

const Board = (props) => {
    let darkness = "board ";
    darkness += props.isDarkness ? "dark" : "light";
    const board = props.board.map(
        (cell,i)=> {
               let entity = props.entities.filter( entity => entity.x === cell.x && entity.y === cell.y);
               if(entity.length!==0){
                   return <span   
                        id={i}
                        x={entity[0].x} 
                        y={entity[0].y} 
                        key={i} 
                        className={props.isDarkness ? "":entity[0].type}> 
                   </span>
               }else{
                   return <span   
                        id={i}
                        x={cell.x} 
                        y={cell.y} 
                        key={i} 
                        className={props.isDarkness ? "":cell.type}> 
                </span>
               }
               
            }
        );
    return (
        <div className ={darkness} tabIndex="0">
           {board}
        </div>
    );
};
export default Board;
Board.propTypes = {
    isDarkness:PropTypes.bool.isRequired,
    board: PropTypes.array.isRequired
};