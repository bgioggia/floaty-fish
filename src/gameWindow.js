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
        this.fish= React.createRef();
    }

    getFishPos(){
        console.log(this.fish.current.state.yPos)
        return this.fish.current.state.yPos
    }

    componentDidMount(){
        this.interval = setInterval(() => this.getFishPos(), 50);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div id="GameWindow">
                <Fish ref={this.fish} />
            </div>
        );
    }
}