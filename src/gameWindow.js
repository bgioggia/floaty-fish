import React from 'react';
import Fish from './fish.js';
import './gameWindow.css'
import Seaweed from "./seaweed";
export default class gameWindow extends React.Component {

    // constructor for gameWindow
    constructor(props) {
        super(props);
        this.fish = React.createRef();
        this.seaweed1 = React.createRef();
        this.seaweed2 = React.createRef();
        this.state = {startMenu: true, score: 0, hiScore: 0};
        this.startGame = this.startGame.bind(this);
    }

    // handleFishPosn updates the gameState
    // - kills the fish if it touches a border of the gameWindow
    // - kills the fish if it touches seaweed
    handleFishPosn(){
        if(this.fish.current.state.yPos < -20 || this.fish.current.state.yPos > 623) {
            this.fish.current.die();
            this.seaweed1.current.endGame();
            this.seaweed2.current.endGame();
            this.setState(() => {
                return {startMenu: true};
            });
        }
        if(this.seaweed1.current.state.xPos < 146
            && Math.abs(this.seaweed1.current.state.windowHeight - this.fish.current.state.yPos) > 40){
            this.fish.current.die();
            this.seaweed1.current.endGame();
            this.seaweed2.current.endGame();
            this.setState(() => {
                return {startMenu: true};
            });
        }
        if(this.seaweed2.current.state.xPos < 146
            && Math.abs(this.seaweed2.current.state.windowHeight - this.fish.current.state.yPos) > 40){
            this.fish.current.die();
            this.seaweed1.current.endGame();
            this.seaweed2.current.endGame();
            this.setState(() => {
                return {startMenu: true};
            });
        }
    }

    // startGame disables the menu, and adds the fish to the screen.
    startGame() {
        this.fish.current.respawn();
        this.seaweed1.current.startGame();
        this.setState(() => {
            return {startMenu: false, score: 0};
        });
    }

    // incrementScore() adds 1 to the score every 0.5 seconds if the game is being played.
    incrementScore() {
        if(!this.state.startMenu) {
            this.setState((state) => {
                if (state.score === 150) {
                    this.seaweed2.current.startGame();
                }
                if (state.score === state.hiScore) {
                    return {score: state.score + 10, hiScore: state.hiScore + 10};
                }
                else {
                    return {score: state.score + 10};
                }
            });
        }
    }

    //mount
    componentDidMount(){
        this.interval = setInterval(() => this.handleFishPosn(), 50);
        this.interval = setInterval(() => this.incrementScore(), 500);
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
                <button id={startMenu ? "startButton" : "hiddenButton"}
                        onClick={startMenu ? this.startGame : null}>{startMenu ? "Start New Game!" : null}</button>
                <div id={startMenu ? null : "scoreContainer"}>
                    <h3 id={startMenu ? null : "score"}>{startMenu ? null : "High Score: " + this.state.hiScore}</h3>
                    <div id={startMenu ? null : "scoreSpacer"}/>
                    <h2 id={startMenu ? null : "score"}>{startMenu ? null : "Current Score: " + this.state.score}</h2>
                </div>
                <Fish ref={this.fish}/>
                <div>
                    <Seaweed ref={this.seaweed1}/>
                </div>
                <div>
                    <Seaweed ref={this.seaweed2}/>
                </div>
            </div>
        );
    }
}