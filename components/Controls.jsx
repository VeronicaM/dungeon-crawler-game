import React from 'react';
import './controls.scss';
import PropTypes from 'prop-types';
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
};
export default Controls;
Controls.propTypes = {
    health:PropTypes.number.isRequired,
    weapon: PropTypes.string.isRequired,
    attack: PropTypes.number.isRequired,
    level:  PropTypes.number.isRequired,
    nextLevel:  PropTypes.number.isRequired,
    dungeon:  PropTypes.number.isRequired,
    onToggle:  PropTypes.func.isRequired
};