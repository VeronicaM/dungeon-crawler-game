import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import '../app.scss';
import Controls from './Controls.jsx';
import Board from './Board.jsx';
import {connect} from 'react-redux';
import * as gameActions from '../actions/gameActions.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.onToggleDarkness = this.onToggleDarkness.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }
    onToggleDarkness(){
        this.props.actions.toggleDarkness();
    }
    createBoard(){
        this.props.actions.createBoard();
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
function mapDispatchToProps(dispatch){
    return {
        actions :bindActionCreators(gameActions,dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App); 
App.propTypes = {
    actions : PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
    isDarkness:PropTypes.bool.isRequired,
    board: PropTypes.array.isRequired
};