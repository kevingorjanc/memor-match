import React from "react";
import "./App.css"
import GameScreenComponent from "./game-screen-component";

export default class StartScreenComponent extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                startGame: false
            }
            this.startGame = this.startGame.bind(this);
            this.resetGame = this.resetGame.bind(this);
        }


    startGame(){
        this.setState({
            startGame: true
        })
    }

    resetGame(){
        this.setState({
            startGame: false
        })
    }


    render(){
        return(
            <React.Fragment>
                {this.state.startGame ?
                    <GameScreenComponent resetGame={this.resetGame}></GameScreenComponent>
                    :
                    <div className={"start-screen"}>
                        <div className={"title"}>Memor-Match</div>
                        <button className={"start-button"} onClick={this.startGame}>Start A New Game!</button>
                    </div>
                }
            </React.Fragment>
        )
    }
}