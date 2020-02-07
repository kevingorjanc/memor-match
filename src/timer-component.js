import React from "react";
import "./App.css";

export default class TimerComponent extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         startTime: "",
    //         compareTime: ""
    //     }
    // }


    startTime = "";
    compareTime = "";

    timer() {
        if (this.startTime === "") {
            let fullDate = new Date();
            this.startTime = fullDate.getTime();
            console.log(this.startTime);
        } else {
            setTimeout(() => {
                let secondFullDate = new Date();
                this.compareTime = secondFullDate.getTime();


            }, 35);
             return((this.compareTime - this.startTime)/1000);
            // console.log(this.compareTime - this.startTime);


        }
    }




    render() {
        return (
            <div className={"attempts-display"}>time elapsed = {this.timer()}</div>
        )
    }
}


