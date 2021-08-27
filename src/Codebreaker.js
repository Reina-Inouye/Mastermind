import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Userpick from './Userpick';
import Codedisplay from './Codedisplay.js'
import './Code.css';

class Codebreaker extends Component {
    constructor(props) {
        super(props);
        this.state = { colorGuesses: [], isGuessing: true, guessesMax:10, computerCode:[] }
        this.updateGuesses = this.updateGuesses.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateGuesses(pick) {
        console.log(pick);
        this.setState({
            colorGuesses: [...this.state.colorGuesses, pick],
            isGuessing: false
        })
          
    }

    handleClick() {
        let code = [];
        for (let i = 0; i <= 3; i++) {
            code[i] = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }
        
        this.setState({computerCode:code})
        console.log(`code is ${code}`)
    }

    render() {    
        return (
            <div>
                <h1 className="mastermind">Codebreaker</h1>
               
                <Button className ="guess" color="success" onClick={this.handleClick}>Press so computer picks code</Button>

                <h4 className="guess">Guess the Code!</h4>
                {/* <Userpick colors = {this.props.colors} updateGuesses={this.updateGuesses}/> */}
               
                {this.state.isGuessing? (
                <Userpick colors = {this.props.colors} updateGuesses={this.updateGuesses}/>
                ) : (
                <Codedisplay colors={this.state.colorGuesses} code = {this.state.computerCode}/>
                )}
                 

                <Button color="primary" href="/">
                    Go Back
                </Button>
            </div>
        );
    }
}

export default Codebreaker;
