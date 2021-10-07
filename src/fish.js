import React from 'react';
import './playerFish.css';
export default class Fish extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { yPos: 0 };
    }

    onKeyPress = (event) => {
        if (event.keyCode === 32) {  //keycode for spacebar
            console.log("oh my goodness you have clicked the spacebar")
            this.setState((state, props) => {
                return {yPos: state.yPos + 10};
            });
            console.log(this.state.yPos);
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.onKeyPress, false);
    }
    componentWillUnmount(){
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