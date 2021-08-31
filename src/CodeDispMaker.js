import React, { Component } from 'react';

class CodeDispMaker extends Component {
    render() {

        return (
            <div>
                <div className="colordisp">
                    <p className="guess"> Guess #{this.props.colors.id}</p>
                    <div style={{ backgroundColor: this.props.colors.color1, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors.color2, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors.color3, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: this.props.colors.color4, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    {/* {message} */}
                </div>
            </div>
        );
    }
}

export default CodeDispMaker;
