import React from "react";


export default class GameTilesComponent extends React.Component {







    firstRow = [];
    secondRow = [];
    thirdRow = [];
    fourthRow = [];
    availableTiles = [
        <div id={"red"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"red"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"black"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"black"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"grey"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"grey"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"green"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"green"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"blue"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"blue"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"purple"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"purple"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"orange"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"orange"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"pink"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
        <div id={"pink"} className={"game-tiles"} onClick={this.handleTileClick}></div>,
    ];

    render() {
        return (<React.Fragment>
                <div className={"row"}>{this.firstRow}</div>
                <div className={"row"}>{this.secondRow}</div>
                <div className={"row"}>{this.thirdRow}</div>
                <div className={"row"}>{this.fourthRow}</div>
            </React.Fragment>
        )
    }
}
