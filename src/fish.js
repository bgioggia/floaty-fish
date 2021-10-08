import React from 'react';
import './playerFish.css';
export default class Fish extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yPos: 0,
            yVelocity: 0,
            delta: 0.5};
    }

    onKeyPress = (event) => {
        if (event.keyCode === 32) {  //keycode for spacebar
            this.setState((state) => {
                return {yVelocity: state.yVelocity + state.delta*20};
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

    tick() {
        this.setState((state) => {
            return {yVelocity: state.yVelocity - state.delta};
        });
        if (this.state.yVelocity < -15){ //Keeps the fish relatively bouncy
            this.setState(() => {
                return {yVelocity: -15};
            });
        }
        this.setState((state) => {
            return {yPos: state.yPos + state.yVelocity};
        });
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
        return (
            <div id='player_fish'
                 style={{
                     position: "absolute",
                     marginTop: `${this.state.yPos}px`,
                 }}>

                <div id='player_tail'/>
                <div id='player_body'><div id='player_eye'/></div>

            </div>
        );
    }
}