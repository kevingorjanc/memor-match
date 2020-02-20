import React from "react";
import "./App.css"
import GameScreenComponent from "./game-screen-component";
import memMatchLogo from "./memory-match.svg"
import HighScoresComponent from "./high-scores-component";

export default class StartScreenComponent extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                startGame: false,
                viewScores: false,
                newScore: ""
            }
            ;
            this.startGame = this.startGame.bind(this);
            this.resetGame = this.resetGame.bind(this);
            this.viewHighScores = this.viewHighScores.bind(this);
            this.closeHighScores = this.closeHighScores.bind(this);
        }


    startGame(){
        this.setState({
            startGame: true,
            viewScores: false
        })
    }

    resetGame(){
        this.setState({
            startGame: false
        })
    }

    viewHighScores(object){
        console.log(object);
        this.setState({
            viewScores: true,
            startGame: false,
            newScore: object
            }
        );
    }

    closeHighScores(){
        this.setState({
            viewScores: false
        })
    }
    //
    // saveNewScore(object){
    //     this.setState({
    //         newScore: object
    //     })
    // }
    //


    whichView(){
        if (this.state.startGame) {
            return <GameScreenComponent resetGame={this.resetGame}
                                        viewHighScores={this.viewHighScores}/>
        } else if (this.state.viewScores){
            return <HighScoresComponent closeHighScores={this.closeHighScores}
                                        newScore={this.state.newScore}/>
        } else {
            return(
                <div className={"start-screen"}>
                        <img src={memMatchLogo} alt={"MemoryMatch!"} className={"logo"}></img>
                        <br/>
                        <button className={"reset-game-button"} onClick={this.startGame}>Start Game</button>
                        <button className={"reset-game-button"} onClick={this.viewHighScores}>High Scores</button>
                </div>
            )
        }
    }

    render(){
        return(
            <React.Fragment>

                    {/*/!*<GameScreenComponent resetGame={this.resetGame}></GameScreenComponent>*!/*/}
                    {/*/!*:*!/*/}

                    {/*<div className={"start-screen"}>*/}
                        {/*<img src={memMatchLogo} alt={"MemoryMatch!"} className={"logo"}></img>*/}
                        {/*<br/>*/}
                        {/*<button className={"start-button"} onClick={this.startGame}>Start A New Game!</button>*/}
                         {/*<button className={"start-button"} onClick={this.viweScores}>View High Scores!</button>*/}
                    {/*</div>*/}
                <span>{this.whichView()}</span>

            </React.Fragment>
        )
    }
}