import React from 'react';
import '../app.scss';
import Controls from './Controls.jsx';
import Board from './Board.jsx';
import {connect} from 'react-redux';
import * as gameActions from '../actions/gameActions.js';
class App extends React.Component {

    constructor(props) {
        super(props);
        this.onToggleDarkness = this.onToggleDarkness.bind(this);
    }
    onToggleDarkness(){
        this.props.dispatch(gameActions.toggleDarkness());
    }
    render() {
     return (
            <div className="mainContainer">
                <Controls {...this.props.player} onToggle ={this.onToggleDarkness}/>
                <Board isDarkness ={this.props.isDarkness}/>
            </div>
        );
    }
}

function mapStateToProps(state, props){
    return {
        player : state.game.player,
        isDarkness: state.game.isDarkness
    };
}
export default connect(mapStateToProps)(App); 