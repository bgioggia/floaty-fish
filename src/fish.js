import React from 'react';
import './playerFish.css';
export default class Fish extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yPos: 0,
            delta: 7};
    }

    onKeyPress = (event) => {
        if (event.keyCode === 32) {  //keycode for spacebar
            this.setState((state) => {
                return {yPos: state.yPos + state.delta};
            });}
    }

    tick() {
        this.setState((state) => {
            return {yPos: state.yPos - state.delta};
        });
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
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
                <div id='player_body'/>
                <div id='player_eye'/>
            </div>
        );
    }
}