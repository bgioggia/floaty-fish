import React from 'react';
import './playerFish.css';
export default class Fish extends React.Component {

    // Constructor for Fish
    constructor(props) {
        super(props);
        this.state = {
            yPos: 500,
            yVelocity: 0,
            delta: 0.5,
            alive: false
        };
    }

    // Handles fish interactions with keyboard button presses
    // Spacebar -> Fish will increase its downard velocity by 15 pixels/s with a cap of 15
    // If the fish is dead this function does nothing.
    onKeyPress = (event) => {
        if(this.state.alive){
            if (event.keyCode === 32) {  //keycode for spacebar
                this.setState((state) => {
                    return {yVelocity: state.yVelocity + state.delta*15};
                });
                if (this.state.yVelocity > 15){ //Keeps the fish relatively bouncy
                    this.setState(() => {
                        return {yVelocity: 15};
                    });
                }
                this.setState((state) => {
                    return {yPos: state.yPos + state.yVelocity};
                });}
        }
        else {
            if (event.keyCode === 32) {  //keycode for spacebar
                this.respawn();
            }
        }
    }

    // tick function handles runs every .05 seconds
    // Causes fish to increase its upward velocity by 10 every .05 seconds with a cap of -10
    // If the fish is dead, this function puts the fish at the starting postion and speed to play again.
    tick() {
        if(this.state.alive) {
            this.setState((state) => {
                return {yVelocity: state.yVelocity - state.delta};
            });
            if (this.state.yVelocity < -10) { //Keeps the fish relatively bouncy
                this.setState(() => {
                    return {yVelocity: -10};
                });
            }
            this.setState((state) => {
                return {yPos: state.yPos + state.yVelocity};
            });
        }
        else {
            this.setState(() => {
                return {yVelocity: 0, yPos: 500};
            })
        }
    }

    // The die function kills the fish.
    // Sets alive to false which is handled in other functions
    die() {
        this.setState(() => {
            return {alive: false}
        })
    }

    // Makes the fish alive
    respawn() {
        this.setState(() => {
            return {alive: true}
        })
    }

    // ComponentDidMount()
    // runs the tick function every 0.05 seconds.
    // enables keydown function
    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 50);
        document.addEventListener("keydown", this.onKeyPress, false);
    }

    // Clears
    componentWillUnmount(){
        clearInterval(this.interval);
        document.removeEventListener("keydown", this.onKeyPress, false);
    }

    // Renders fish if the fish is alive. If the fish is dead, nothing is rendered.
    render() {
        const alive = this.state.alive;
        return (
            <div id={alive ? 'player_fish': null}
                 style={{
                     position: "absolute",
                     marginTop: `${this.state.yPos}px`,
                 }}>

                <div id={alive ? 'player_tail' : null}/>
                <div id={alive ? 'player_body' : null}>
                    <div id={alive ? 'player_eye' : null}/>
                </div>

            </div>
        );
    }
}