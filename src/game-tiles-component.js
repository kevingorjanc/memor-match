import React from 'react'
import "./game-screen-component"

export default class GameTilesComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //
        // };
        this.randomizeTiles();
        // this.resetAllTiles = this.resetAllTiles.bind(this);
    }

    firstRow = [];
    secondRow = [];
    thirdRow = [];
    fourthRow = [];

    componentDidUpdate() {
        if (this.props.resetTiles === true) {
            let i;
            let allTiles = [];
            allTiles.push(this.firstRow, this.secondRow, this.thirdRow, this.fourthRow);
            let gameTiles = document.getElementsByClassName("game-tiles");
            for (i = 0; i < gameTiles.length; i++) {
                gameTiles[i].className = "game-tiles";
            }

            this.props.turnOffReset();
        }
    }


    randomizeTiles() {
        let array = [
        <div id={"red"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"red"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"yellow"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"yellow"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"grey"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"grey"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"green"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"green"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"blue"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"blue"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"purple"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"purple"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"orange"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"orange"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"pink"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
        <div id={"pink"} className={"game-tiles"} onClick={this.props.handleTileClick}></div>,
    ];
        while (array.length > 0) {
            let i = array.length;
            let indexToRemove = Math.floor(Math.random() * i);
            if (i >= 13 && i <= 16) {
                this.firstRow.push(array.splice(indexToRemove, 1));
            } else if (i >= 9 && i <= 12) {
                this.secondRow.push(array.splice(indexToRemove, 1));
            } else if (i >= 5 && i <= 8) {
                this.thirdRow.push(array.splice(indexToRemove, 1));
            } else {
                this.fourthRow.push(array.splice(indexToRemove, 1));
            }
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className={"row"}>{this.firstRow}</div>
                <div className={"row"}>{this.secondRow}</div>
                <div className={"row"}>{this.thirdRow}</div>
                <div className={"row"}>{this.fourthRow}</div>
            </React.Fragment>
        )
    }
}


