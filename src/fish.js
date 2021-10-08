import React from 'react';
import './playerFish.css';
export default class Fish extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yPos: 500,
            yVelocity: 0,
            delta: 0.5,
            alive: true};
    }

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
    }

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
    }

    die() {
        this.setState(() => {
            return {alive: false}
        })
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 50);
        document.addEventListener("keydown", this.onKeyPress, false);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
        document.removeEventListener("keydown", this.onKeyPress, false);
    }

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