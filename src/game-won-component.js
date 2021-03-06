import React from "react"
import "./App.css"
import memMatchLogo from "./memory-match.svg";
// import Backendless from 'backendless';


export default class GameWonComponent extends React.Component{

    constructor(props){
        super(props);
        this.submitScore = this.submitScore.bind(this);
    }


    submitScore() {
        if (document.getElementsByClassName("user-name")[0].value.length > 4
            &&
            document.getElementsByClassName("user-name")[0].value.length <= 40) {
                let scoreObject = {
                    attemptedMatches: this.props.tileClicks / 2,
                    name: document.getElementsByClassName("user-name")[0].value,
                    time: this.props.displayTime,
                    compositeScore: this.props.displayTime + (this.props.tileClicks / 2)
                };
               fetch('/high-scores', {
                      method: 'POST',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(scoreObject)
                      }
               )
                   .then(res => res.json())
                   .then( (res) => {
                       this.props.viewHighScores();

                   })
        } else {
            alert("Moniker must be between 5 and 40 characters!!")
        }
    }


    render(){
        return(
            <div className={"game-won"}>
                <div className={"game-win-text"}>You've Beaten</div>
                <div className={"game-end-logo"}>
                <img src={memMatchLogo} alt={"MemoryMatch!"} className={"logo"}></img>
                </div>
                <br></br>
                <div className={"attemots"}><b>Matches Attempted: {this.props.tileClicks / 2}</b></div>
                <div className={"attempts"}><b>Game Duration : {this.props.displayTime} Seconds</b></div>
                <div>
                <div className={"name-input-field-label"}>Choose a Name!</div>
                <input className={"user-name"}></input>
                </div>
                <br></br>

                <br></br>
                <button className={"reset-game-button"} onClick={this.submitScore}>Submit Score</button>
                <button className={"reset-game-button"} onClick={this.props.resetGame}>Play Again</button>

            </div>
        )
    }
}