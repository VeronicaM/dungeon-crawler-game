import React from 'react';
import './controls.scss';
const Controls = ({
    health,
    weapon,
    attack,
    level,
    nextLevel,
    dungeon,
    onToggle
}) => {
    return (
        <div className="controls">
            <span>
                <b>
                    Health:
                </b>
                <i>
                    {health}
                </i>
            </span>
            <span>
                <b>
                    Weapon :
                </b>
                <i>
                    {weapon}
                </i>
            </span>
            <span>
                <b>
                    Attack :
                </b>
                <i>
                    {attack}
                </i>
            </span>
            <span>
                <b>Level :</b>
                <i>
                    {level}
                </i>
            </span>
            <span>
                <b>Next Level :</b>
                <i>
                    {nextLevel}
                </i>
                XP
            </span>
            <span>
                <b>
                    Dungeon :
                </b>
                <i>
                    {dungeon}
                </i>
            </span>
            <button onClick={onToggle}>
                Toggle Darkness
            </button>
        </div>
    );
}
export default Controls;