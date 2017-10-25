import React from 'react';
import '../app.scss';
import Controls from './Controls.jsx';
import Board from './Board.jsx';
import {connect} from 'react-redux';
import * as gameActions from '../actions/gameActions.js';
import GameService from '../services/gameService.js';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.onToggleDarkness = this.onToggleDarkness.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }
    onToggleDarkness(){
        this.props.dispatch(gameActions.toggleDarkness());
    }
    createBoard(){
        this.props.dispatch(gameActions.createBoard());
    }
    render() {
     return (
            <div className="mainContainer">
                <Controls {...this.props.player} onToggle ={this.onToggleDarkness}/>
                <Board isDarkness ={this.props.isDarkness} board={this.props.board}/>
            </div>
        );
    }
}

function mapStateToProps(state, props){
    return {
        player : state.game.player,
        isDarkness: state.game.isDarkness,
        board : state.game.board
    };
}
export default connect(mapStateToProps)(App); 