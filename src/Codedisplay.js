import React, { Component } from 'react';
import './Code.css';

class Codedisplay extends Component {
    render() {;
        let l = this.props.colors.length
        let colorsToDisplay = this.props.colors[this.props.colors.length-1];
        console.log(colorsToDisplay.color1)
        return (
            <div className="colordisp">
                <p className="guess"> Guess {l}</p>
                <div style={{backgroundColor:colorsToDisplay.color1, width:"40px", height:"40px", borderRadius:"50%"}}></div>
                <div style={{backgroundColor:colorsToDisplay.color2, width:"40px", height:"40px", borderRadius:"50%"}}></div>
                <div style={{backgroundColor:colorsToDisplay.color3, width:"40px", height:"40px", borderRadius:"50%"}}></div>
                <div style={{backgroundColor:colorsToDisplay.color4, width:"40px", height:"40px", borderRadius:"50%"}}></div>
            </div>
        );
    }
}

export default Codedisplay;
