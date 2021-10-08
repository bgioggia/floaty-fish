import React from 'react';
import Fish from './fish.js';
import './gameWindow.css'
export default class gameWindow extends React.Component {

    constructor(props) {
        super(props);
        this.fish= React.createRef();
    }

    getFishPos(){
        if(this.fish.current.state.yPos < -20 || this.fish.current.state.yPos > 623) {
            this.fish.current.die();
        }
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