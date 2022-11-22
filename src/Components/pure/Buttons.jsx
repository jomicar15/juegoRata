import React from 'react';

const Buttons = ({moveUp,moveDown,moveRight,moveLeft}) => {

    return (
            <div className="buttonsBox">
                    <button className="up" onClick={moveUp}>Up</button>
                    <button className="down" onClick={moveDown}>Down</button>
                    <button className="left" onClick={moveLeft}>Left</button>
                    <button className="right" onClick={moveRight}>Right</button>
            </div> 
    );
}

export default Buttons;
