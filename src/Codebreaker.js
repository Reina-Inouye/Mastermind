import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Computerpick from './Computerpick';

class Codebreaker extends Component {
    render() {
        let colorPick = [];
        for (let i = 0; i <= 3; i++) {
            colorPick[i] = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }
        return (
            <div>
                <h1>Codebreaker</h1>
                <h4>Guess 4 of these colors</h4>
                <Computerpick colors={this.props.colors}/>
                <Button color="primary" href="/">
                    Go Back
                </Button>
            </div>
        );
    }
}

export default Codebreaker;
