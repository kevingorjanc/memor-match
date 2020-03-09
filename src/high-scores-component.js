import React from 'react';
import HighScoresTitle from "./highscores-title.svg";

export default class HighScoresComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backendData: '',
            displayableScores: []
        };
        this.callBackend = this.callBackend.bind(this);
        this.callBackend();
    }

    callBackend(){
        console.log("calling backend");
        fetch('/high-scores')
            .then(res => res.json())
            .then( (res) => {
                this.setState({
                    backendData: res
                })
            })
            .then( () => {
                this.sortData();
            })
            .catch( (error) =>{
                console.log(error);
            })
    }

    sortData() {
        console.log("sorting response data");
        let sortedData = this.state.backendData.sort( (a, b) => {
            if (a.compositeScore > b.compositeScore){
                return 1
            } else {
                return -1
            }
        });
        this.makeSortedDataDisplayable(sortedData);
    }

    makeSortedDataDisplayable(sortedData){
        console.log("parsing sorted data for display");
        let displayableScoresArray = [];
        let i = 0;
        while (i <= (sortedData.length - 1) && i <= 50) {
            let displayableScore =
               <tr className={"score-rows"}>
                    <td key={sortedData[i].id}>{i + 1}</td>
                    <td key={sortedData[i].id} ><b>{sortedData[i].name}</b></td>
                    <td key={sortedData[i].id}><b>{sortedData[i].compositeScore}</b></td>
               </tr>;
            i++;
            displayableScoresArray.push(displayableScore);
        }
       this.setState({
           displayableScores: displayableScoresArray
       })
    }




    render() {
        return (
            <React.Fragment>

                <div className={"high-scores"}>
                <img src={HighScoresTitle} alt={"HIGH SCORES!!!"} className={"high-scores-title"}/>
                <br></br>
                <br></br>
                <table className={"table-container"} >
                <tbody >
                <tr className={"high-score-table-headers"}>
                <th className={"high-score-table-headers-small"}></th>
                <th className={"high-score-table-headers-small"}></th>
                <th className={"high-score-table-headers-small"}><i>Time + Attempted Matches</i></th>
                </tr>
                {this.state.displayableScores}

                </tbody>
                </table>
                <button className={"reset-game-button"} onClick={this.props.closeHighScores}>close scores</button>
                </div>

            </React.Fragment>

        )
    }
}


