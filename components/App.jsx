import React from 'react';
import '../app.scss';
import Controls from './Controls.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = initialState();
    }

    render() {
        const {player} = this.state;
        return (
            <div className="mainContainer">
                <Controls {...player}/>
            </div>
        );
    }
}
App.weapons = [
    {
        name: "Stick",
        attack: 10
    }, {
        name: "Dagger",
        attack: 30
    }, {
        name: "Short Sword",
        attack: 40
    }, {
        name: "Archangel's Sword",
        attack: 100
    }
];
const initialState = () => {
    return new Object({
        player: {
            health: 180,
            weapon: App.weapons[0].name,
            attack: App.weapons[0].attack,
            level: 0,
            nextLevel: 100,
            dungeon: 0
        }
    })
}
export default App;