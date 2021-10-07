import React from 'react';
import './playerFish.css';
export default class Fish extends React.Component {
    onKeyPress(event){
        if(event.keyCode === 32) {  //keycode for spacebar
            console.log("oh my goodness you have clicked the spacebar")
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
            <div id='player_fish' >
                <div id='player_tail'/>
                <div id='player_body'/>
                <div id='player_eye'/>
            </div>
        );
    }
}