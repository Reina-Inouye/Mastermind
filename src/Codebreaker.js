import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Userpick from './Userpick';
import Codedisplay from './Codedisplay.js'
import './Code.css';

class Codebreaker extends Component {
    constructor(props) {
        super(props);
        this.state = { colorGuesses: [], isGuessing: true, guessesMax:10 }
        this.updateGuesses = this.updateGuesses.bind(this);
    }

    updateGuesses(pick) {
        console.log(pick);
        this.setState({
            colorGuesses: [...this.state.colorGuesses, pick],
            isGuessing: false
        })
        console.log(this.state.colorGuesses);
        
    }

    render() {
        let code = [];
        for (let i = 0; i <= 3; i++) {
            code[i] = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }
        return (
            <div>
                <h1 className="mastermind">Codebreaker</h1>
                <h4>Guess the Code!</h4>

                {this.state.isGuessing? (
                <Userpick colors = {this.props.colors} updateGuesses={this.updateGuesses}/>
                ) : (
                //    console.log(this.state.colorGuesses.length) 
                <Codedisplay colors={this.state.colorGuesses}/>
                )}
                 

                <Button color="primary" href="/">
                    Go Back
                </Button>
            </div>
        );
    }
}

export default Codebreaker;
