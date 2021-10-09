import React from 'react';
import Fish from './fish.js';
import './gameWindow.css'
export default class gameWindow extends React.Component {

    // constructor for gameWindow
    constructor(props) {
        super(props);
        this.fish= React.createRef();
    }

    // handleFishPosn updates the gameState
    // - kills the fish if it touches a border of the gameWindow
    handleFishPosn(){
        if(this.fish.current.state.yPos < -20 || this.fish.current.state.yPos > 623) {
            this.fish.current.die();
        }
    }

    //mount
    componentDidMount(){
        this.interval = setInterval(() => this.handleFishPosn(), 50);
    }

    //unmount
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    //Renders the game window
    render() {
        return (
            <div id="GameWindow">
                <Fish ref={this.fish} />
            </div>
        );
    }
}