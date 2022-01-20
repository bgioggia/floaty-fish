import React from 'react';
import './seaweed.css';
export default class Seaweed extends React.Component {

    // constructor for gameWindow
    constructor(props) {
        super(props);
        this.state = {windowHeight: (Math.floor(Math.random() * 475) + 25), xPos: 920, delta: 9};
        this.gameStarted = false;
    }


    tick() {
        if (this.state.gameStarted) {
            if (this.state.xPos < 10) { //Returns the seaweed to starting position
                this.setState(() => {
                    return {windowHeight: (Math.floor(Math.random() * 475) + 25), xPos: 920};
                });
            }
            else{ // Moves the seaweed to the left every tick.
                this.setState((state) => {
                    return {xPos: state.xPos - state.delta};
                });
            }

        }
    }

    // Sets interval for moving seaweed to the left
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 50);
    }

    // Clears
    componentWillUnmount(){
        clearInterval(this.interval);
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
            return {gameStarted: false, xPos: 920}
        })
    }

    //Renders green seaweed pillar with randomly placed window within it.
    render() {
        const windowHeight = this.state.windowHeight;
        const xPos = this.state.xPos;
        const gameStarted = this.state.gameStarted;

        return (
            <div id={gameStarted ? "pillar" : null} style={{marginLeft: `${xPos}px`,}}>
                <div id={gameStarted ? "window" : null}
                     style={gameStarted ? {
                         position: "absolute",
                         marginTop: `${windowHeight}px`} : null}/>
            </div>
        );
    }

}