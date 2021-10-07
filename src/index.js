import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './playerFish.css';
import reportWebVitals from './reportWebVitals';

const fish = (
    <div id='player_fish'>
        <div id='player_tail'>
        </div>
        <div id='player_body'>

        </div>
        <div id='player_eye'/>
    </div>
);

ReactDOM.render(fish,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
