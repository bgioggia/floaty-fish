import React from 'react';
import './playerFish.css';
export default class Fish extends React.Component {
    constructor(props) {
        super(props);
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