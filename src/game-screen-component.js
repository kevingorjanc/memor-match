import React from 'react';
import './App.css';
import GameTilesComponent from './game-tiles-component';
import TimerComponent from "./timer-component";
import memMatchLogo from "./memory-match.svg";

export default class GameScreenComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstTileColor: "",
            secondTileColor: "",
            matches: 0,
            resetTiles: false,
            tileClicks: 0,
        };
        this.handleTileClick = this.handleTileClick.bind(this);
        this.compareTileColors = this.compareTileColors.bind(this);
        this.turnOffReset = this.turnOffReset.bind(this);
    }



    handleTileClick(e) {
        //checking to see if classname has been modded, all default classname for gametiles are of length ~10,
        //do not want to run the event handler if a tile has already been clicked and clicked again
        if (e.target.className.length < 12) {
            let tileColor = e.target.id;
            e.target.className = e.target.className + " " + tileColor;
            console.log("handling click");
            if (this.state.firstTileColor === "") {
                this.setState({
                    firstTileColor: tileColor,
                    tileClicks: this.state.tileClicks + 1
                })
            } else {
                this.setState({
                    secondTileColor: tileColor,
                    tileClicks: this.state.tileClicks + 1

                });
                setTimeout(() => this.compareTileColors(), 300);
            }
        }
    }


     compareTileColors() {
        console.log("comparing colors");
        if (this.state.firstTileColor === this.state.secondTileColor) {
            this.setState({
                firstTileColor: "",
                secondTileColor: "",
                matches: (this.state.matches + 1)
            })
        } else {
            this.setState({
                firstTileColor: "",
                secondTileColor: "",
                matches: 0,
                resetTiles: true
            });
        }
    }

    turnOffReset(){
        this.setState({
            resetTiles: false
        })
    }

    render() {
        return (
            <React.Fragment>
                        <div className={"title"}>
                            <img src={memMatchLogo} alt={"MemoryMatch!"} className={"logo"}></img>
                        </div>
                        <div className={"rules"}><b>Match the tiles, remember the matches.</b></div>
                        <br></br>
                         <div className={"stat-display-box"}>
                             <div className={"attempts-display"}>Matches Attempted
                                : {Math.floor(this.state.tileClicks / 2)}</div>
                            <TimerComponent matches={this.state.matches}
                                            tileClicks={this.state.tileClicks}
                                            resetGame={this.props.resetGame}
                                            viewHighScores={this.props.viewHighScores}></TimerComponent>
                        </div>
                        <br></br>

                        <GameTilesComponent handleTileClick={this.handleTileClick}
                                            resetTiles={this.state.resetTiles}
                                            turnOffReset={this.turnOffReset}>
                        </GameTilesComponent>
            </React.Fragment>
        )
    }
}