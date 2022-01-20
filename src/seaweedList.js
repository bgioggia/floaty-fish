import React from 'react';
import './seaweed.css';
import Seaweed from "./seaweed";
export default class SeaweedList extends React.Component {

    constructor(props) {
        super(props);
        this.activeSeaweed = {activeSeaweed:{}};
        this.gameStarted = false;
        this.seaweed = React.createRef();
    }


    //mount
    componentDidMount(){
        this.interval = setInterval(() => this.addSeaweed(), 50);
    }

    //unmount
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    addSeaweed(){
        this.setState((state) => {
            return {activeSeaweed: state.activeSeaweed.add(<Seaweed/>)};
        });
    }

    render() {
        const activeSeaweed = this.activeSeaweed;
        return (
            <div>
                {activeSeaweed.map(activeSeaweed => <div>{activeSeaweed}</div>)}
            </div>
        );
    }
}
