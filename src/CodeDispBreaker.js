import React, { Component } from 'react';
import './Code.css';

class CodeDispBreaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }

    componentDidMount() {
        setTimeout(function () { //Start the timer
            this.setState({ render: true }) //After 2 second, set render to true
        }.bind(this), 2000)
    }




    render() {

        let codetoCheck = [];

        codetoCheck[0] = this.props.colors.color1;
        codetoCheck[1] = this.props.colors.color2;
        codetoCheck[2] = this.props.colors.color3;
        codetoCheck[3] = this.props.colors.color4;

        let check = this.props.code.slice(0);
        let x = 0;
        let index = 0;
        for (let i = 0; i <= 3; i++) {
            index = check.indexOf(codetoCheck[i]);
            if (index !== -1) {
                x = x + 1;
                check.splice(index, 1);
            }
        }

        let y = 0;
        for (let i = 0; i <= 3; i++) {
            if (this.props.code[i] === codetoCheck[i]) {
                y = y + 1;
            }
        }

        let message;
        if (y === 4) {
            message = "PERFECT MATCH!!! Press Start Over to play again";
        } else if (y !== 4 && this.props.colors.id !== 10) {
            message = `${x} correct color(s) & ${y} in correct position(s), Guess again`
        } else {
            message = `${x} correct color(s) & ${y} in correct position(s), GAME OVER!`
        }


        let renderContainer = false; //By default don't render anything
        if (this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <p className="guess">{message}</p> //Add dom elements
        }

        return (
            <div className="colordisp">
                <p className="guess"> Guess {this.props.colors.id}</p>
                <div style={{ backgroundColor: codetoCheck[0], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                <div style={{ backgroundColor: codetoCheck[1], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                <div style={{ backgroundColor: codetoCheck[2], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                <div style={{ backgroundColor: codetoCheck[3], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                {renderContainer}
            </div>
        );
    }
}

export default CodeDispBreaker;
