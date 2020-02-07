import React from "react"
import "./App.css"


export default class GameWonComponent extends React.Component{
    render(){
        return(
            <div className={"game-won"}>
                <div>You Won!</div>
                <button onClick={this.props.resetGame}>Play Again!</button>
            </div>
        )
    }
}