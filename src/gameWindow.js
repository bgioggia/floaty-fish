import React from 'react';
import Fish from './fish.js';
import './gameWindow.css'
export default class gameWindow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yPos: 0,
            yVelocity: 0,
            delta: 0.5
        };
    }

    render() {
        return (
            <div id="GameWindow">
                <Fish/>
            </div>
        );
    }
}