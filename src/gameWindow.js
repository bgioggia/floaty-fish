import React from 'react';
import Fish from './fish.js';
import './gameWindow.css'
export default class gameWindow extends React.Component {

    // constructor for gameWindow
    constructor(props) {
        super(props);
        this.fish = React.createRef();
        this.state = {startMenu: true};
        this.startGame = this.startGame.bind(this);
    }

    // handleFishPosn updates the gameState
    // - kills the fish if it touches a border of the gameWindow
    handleFishPosn(){
        if(this.fish.current.state.yPos < -20 || this.fish.current.state.yPos > 623) {
            this.fish.current.die();
            this.setState(() => {
                return {startMenu: true};
            });
        }
    }

    // startGame disables the menu, and adds the fish to the screen.
    startGame() {
        this.fish.current.respawn();
        this.setState(() => {
            return {startMenu: false};
        });
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
        const startMenu = this.state.startMenu;
        return (
            <div id="GameWindow">
                <Fish ref={this.fish}/>
                <button id={startMenu ? "startButton" : "hiddenButton"}
                        onClick={startMenu ? this.startGame : null}>{startMenu ? "Start New Game!" : null}</button>
            </div>
        );
    }
}