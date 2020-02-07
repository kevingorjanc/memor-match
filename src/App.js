import React from 'react';
import './App.css';
import GameTilesComponent from './game-tiles';
import TimerComponent from "./timer-component";

export default class App extends React.Component {
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
                console.log("timing out color compare");
                setTimeout(() => this.compareTileColors(), 300);
            }
        }
    }


     compareTileColors() {
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
        console.log("turn off reset");
        this.setState({
            resetTiles: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <GameTilesComponent handleTileClick={this.handleTileClick}
                                    resetTiles={this.state.resetTiles}
                                    turnOffReset={this.turnOffReset}>

                </GameTilesComponent>
                <div className={"attempts-display"}>Attempts : {Math.floor(this.state.tileClicks / 2)}</div>;
                <TimerComponent></TimerComponent>
            </React.Fragment>
        )
    }
}