import React from 'react';
// import Backendless from 'backendless';
// import HighScoresTitle from "./highscores-title.svg";

export default class HighScoresComponent extends React.Component {
    constructor(props) {
        super(props);
        this.callBackend();
    }
    //     this.state = {
    //         displayableScores: []
    //     };
    //     this.getScores();
    //     this.getScores = this.getScores.bind(this);
    // }

    // getScores() {
    //     let dataArray = [];
    //     Backendless.Data.of("highScores").find()
    //         .then( (returnedArray) => {
    //             dataArray = returnedArray;
    //             console.log(dataArray);
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         });
    //     setTimeout( () => {
    //         this.sortData(dataArray);
    //         }
    //         ,
    //         4000
    //        )
    // }

    // sortData(dataArray){
    //     console.log(dataArray);
    //     dataArray.sort( (a, b) => {
    //         if (a.compositeScore > b.compositeScore){
    //             return 1
    //         } else {
    //             return -1
    //         }
    //     });
    //     this.parseSortedData(dataArray);
    // }

    // parseSortedData(dataArray){
    //     console.log("parsing sorted data for display");
    //     console.log(dataArray);
    //
    //     let displayableScoresArray = [];
    //     let i = 0;
    //     while (i <= (dataArray.length - 1) && i <= 50) {
    //         let displayableScore =
    //            <tr className={"score-rows"}>
    //                 <td key={dataArray[i].id}>{i + 1}</td>
    //                 <td key={dataArray[i].id} ><b>{dataArray[i].name}</b></td>
    //                 <td key={dataArray[i].id}><b>{dataArray[i].compositeScore}</b></td>
    //            </tr>;
    //         i++;
    //         displayableScoresArray.push(displayableScore);
    //     };
    //     console.log(displayableScoresArray);
    //    this.setState({
    //        displayableScores: displayableScoresArray
    //    })
    // }

    callBackend(){
        console.log("calling backend");
        fetch('/high-scores')
            .then(res => res.json())
            .then( (res) => {
                console.log(res);
                // cats.resolve('Success').then( function(value) {
                //     console.log(value);
            })
            .catch( (error) =>{
                console.log(error);
            })
        // , (error) => {
        //         console.log(error);
        //     }
    }

            // .then( (result) => {
            //     console.log(result)
            //     },
            //     (error) => {
            //     console.log(error)
            //     })



    render() {
        return (
            <React.Fragment>

                {/*<div className={"high-scores"}>*/}
                {/*<img src={HighScoresTitle} alt={"HIGH SCORES!!!"} className={"high-scores-title"}/>*/}
                {/*<br></br>*/}
                {/*<br/>*/}
                {/*<table className={"table-container"} >*/}
                {/*<tbody >*/}
                {/*<tr className={"high-score-table-headers"}>*/}
                {/*<th className={"high-score-table-headers-small"}></th>*/}
                {/*<th className={"high-score-table-headers-small"}></th>*/}
                {/*<th className={"high-score-table-headers-small"}><i>Time + Attempted Matches</i></th>*/}
                {/*</tr>*/}

                {/*{this.state.displayableScores}*/}

                {/*</tbody>*/}
                {/*</table>*/}
                {/*<span className={"load-warning"}>(may take a few seconds to load...)</span>*/}
                {/*<button className={"reset-game-button"} onClick={this.props.closeHighScores}>close scores</button>*/}
                {/*</div>*/}

            </React.Fragment>

        )
    }
}


