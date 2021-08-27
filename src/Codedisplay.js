import React, { Component } from 'react';
import './Code.css';

class Codedisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false //Set render state to false
        }
    }

    componentDidMount() {
        setTimeout(function () { //Start the timer
            this.setState({ render: true }) //After 1 second, set render to true
        }.bind(this), 4000)
    }

    render() {;
        let display = [];
        let l = this.props.colors.length
        let colorsToDisplay = this.props.colors[this.props.colors.length-1];
        display[0] = colorsToDisplay.color1;
        display[1] = colorsToDisplay.color2;
        display[2] = colorsToDisplay.color3;
        display[3] = colorsToDisplay.color4;


        let x = 0;
        for (let i=0; i<=3; i++) {
                if (this.props.code.indexOf(display[i]) !==-1) {
                    console.log(2)
                     x = x+1;
            }
        }
          
        let y = 0;
        for (let i=0; i<=3; i++) {
            if (this.props.code[i] === display[i]) {
                y = y+1;
            }
        }
        
        let message;
        if (y===4) {
            message = "Perfect Match!! Press Go Back to Play again";
        } 
        else {
            message = `${x} correct color(s) & ${y} correct in position(s)`
        }


        // if (this.props.isWinner) {
        //     x = <h1 className="Winner">This Hand Wins!</h1>
        // } else {
        //     x = <h1 className="Loser">This Hand Loses!</h1>
        // }
        let renderContainer = false //By default don't render anything
        if (this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <p className = "guess">{message}</p> //Add dom elements
        }

        return (
            <div className="colordisp">
                <p className="guess"> Guess {l}</p>
                <div style={{backgroundColor:display[0], width:"40px", height:"40px", borderRadius:"50%"}}></div>
                <div style={{backgroundColor:display[1], width:"40px", height:"40px", borderRadius:"50%"}}></div>
                <div style={{backgroundColor:display[2], width:"40px", height:"40px", borderRadius:"50%"}}></div>
                <div style={{backgroundColor:display[3], width:"40px", height:"40px", borderRadius:"50%"}}></div>
                {renderContainer}
            </div>
        );
    }
}

export default Codedisplay;
