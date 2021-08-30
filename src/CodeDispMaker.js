import React, { Component } from 'react';

class CodeDispMaker extends Component {
    render() {
console.log(this.props.colors);
console.log(this.props.colors[0].color1);
        return (
            <div>
                <div className="colordisp">
                    <p className="guess"> Guess #{this.props.colors[0].id}</p>
                    <div style={{ backgroundColor: this.props.colors[0].color1, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors[0].color2, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors[0].color3, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors[0].color4, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    {/* {message} */}
                </div>
            </div>
        );
    }
}

export default CodeDispMaker;
