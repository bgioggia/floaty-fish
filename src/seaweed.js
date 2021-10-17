import React from 'react';
import './seaweed.css';
export default class Seaweed extends React.Component {

    // constructor for gameWindow
    constructor(props) {
        super(props);
        this.state = {windowHeight: (Math.floor(Math.random() * 475) + 25), score: 0, hiScore: 0};
        this.gameStarted = false;
    }

    //updates the class to inform that the game has started.
    startGame() {
        this.setState(() => {
            return {gameStarted: true}
        })
    }

    //updates the class to inform that the game has ended.
    endGame() {
        this.setState(() => {
            return {gameStarted: false}
        })
    }

    render() {
        const windowHeight = this.state.windowHeight;
        const gameStarted = this.state.gameStarted;

        return (
            <div id={gameStarted ? "window" : null}
                 style={gameStarted ? {
                position: "absolute",
               marginTop: `${windowHeight}px`,
            } : null}/>

        );
    }

}