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
            if (this.compareTime !== "") {
                return ((this.compareTime - this.startTime) / 1000);
            }

        }
    }




    render() {
        return (
            <div className={"attempts-display"}>Time Elapsed = {this.timer()} seconds</div>
        )
    }
}


