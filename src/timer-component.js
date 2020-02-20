import React from "react";
import "./App.css";
import GameWonComponent from "./game-won-component";

export default class TimerComponent extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         time: 0
    //     }
    // }


    startTime = "";
    compareTime = "";
    displayTime = '';

    componentDidUpdate() {
        console.log(this.props.tileClicks + "theheck");
        if (this.startTime === "") {
            let fullDate = new Date();
            this.startTime = fullDate.getTime();
            console.log(this.startTime);
        } else {
            let secondFullDate = new Date();
            this.compareTime = secondFullDate.getTime();
            this.displayTime = (this.compareTime - this.startTime) / 1000;
            console.log(this.displayTime);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={"timer-display"}> Time Elapsed = {this.displayTime} seconds</div>
                {this.props.matches === 8 ?
                    <GameWonComponent tileClicks={this.props.tileClicks}
                                      displayTime={this.displayTime}
                                      resetGame={this.props.resetGame}
                                      viewHighScores={this.props.viewHighScores}></GameWonComponent>
                    :
                    <span></span>
                }
            </React.Fragment>


        )
    }
}





