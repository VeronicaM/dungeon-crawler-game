import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import '../app.scss';
import Controls from './Controls.jsx';
import Board from './Board.jsx';
import {connect} from 'react-redux';
import GameService from '../services/gameService.js';
import * as gameActions from '../actions/gameActions.js';
import * as gameConstants from '../constants/gameConstants.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {board:this.props.board};
        this.onToggleDarkness = this.onToggleDarkness.bind(this);
        this.createBoard = this.createBoard.bind(this);
        this.updateGameLevel = this.updateGameLevel.bind(this);
        this.onPlayerMove = this.onPlayerMove.bind(this);
     
    }
    componentDidMount() {
        window.addEventListener('keydown', this.onPlayerMove);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onPlayerMove);
    }
    onToggleDarkness(){
        this.props.actions.toggleDarkness();
    }
    createBoard(){
        this.props.actions.createBoard();
    }
    updateGameLevel(){
        this.props.actions.updateGameLevel();
    }
    onPlayerMove(e){
        const direction = e.key;
        let cellIndex= GameService.movePlayer(
                        direction, 
                        this.props.player.position, 
                        this.props.board);
        let cell = this.props.board[cellIndex];
        const entity = this.props.entities.filter( (entity,i) => entity.x === cell.x && entity.y === cell.y);
        cell = entity.length !==0 ? entity[0] : cell;

        switch (cell.type) {
            case 'enemy':
                this.props.actions.attackEnemy(cell);
                if(cell.health <= 0){
                    this.props.actions.setPlayerPosition(cell, cellIndex);
                }
                break;
            case 'health':
                this.props.actions.updateHealth(gameConstants.HEALTH_PER_ITEM);
                this.props.actions.setPlayerPosition(cell, cellIndex);
                break;
            case 'weapon':
                this.props.actions.updateWeapon(cell.weapon);
                this.props.actions.setPlayerPosition(cell, cellIndex);
                break;
            case 'floor':
                 this.props.actions.setPlayerPosition(cell, cellIndex);
                 break;
            default:
                break;
        }           
    }

    render() {
        if(this.props.gameOver){
            return (  
                <div>
                    <div> Game Over ! Better luck next time </div>
                    <button onClick ={this.props.actions.startGame}> Restart Game </button>
                </div> 
            )
        }else
     return (
            <div className="mainContainer">
                <Controls {...this.props.player} onToggle ={this.onToggleDarkness}/>
                <Board
                     isDarkness ={this.props.isDarkness} 
                     board={this.props.board}
                     entities = {this.props.entities}
                     onPlayerMove = {this.onPlayerMove}
                />

            </div>
        );
    }
}
App.propTypes = {
    actions : PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
    isDarkness:PropTypes.bool.isRequired,
    board: PropTypes.array.isRequired,
    entities: PropTypes.array.isRequired,
    gameOver : PropTypes.bool.isRequired
};  
function mapStateToProps(state, props){
    return {
        player : state.game.player,
        isDarkness: state.game.isDarkness,
        entities: state.game.entities,
        board : state.game.board,
        gameOver : state.game.gameOver
    };
}
function mapDispatchToProps(dispatch){
    return {
        actions :bindActionCreators(gameActions,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App); 
