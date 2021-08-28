import React, { Component } from 'react';
import './Code.css';

class Code extends Component {
    render() {
        return (
            <div>
                <div className="guess"> The Code: </div>
                <div className="colordisp">
                    <div style={{ backgroundColor: this.props.colors[0], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors[1], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors[2], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors[3], width: "40px", height: "40px", borderRadius: "50%" }}></div>
                </div>
            </div>
        );
    }
}

export default Code;
