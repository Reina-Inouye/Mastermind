import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Usercode from './Usercode';
import Code from './Code';
import UserCodeCheck from './UserCodeCheck';
import CodeDispMaker from './CodeDispMaker';
import './Code.css';

class Codemaker extends Component {
    constructor(props) {
        super(props);
        this.state = { userCode: [], isSettingCode: true, isFirstGuess: false, isGuessing: false, isDispGuess: false, computerGuesses: [], currentGuess: [], nGuesses: 1 }
        this.setCode = this.setCode.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateArrayGuessCheck = this.updateArrayGuessCheck.bind(this)
    }

    setCode(code) {
        this.setState({
            userCode: code,
            isSettingCode: false,
            isFirstGuess: true,
        })
    }

    handleClick() {
        this.setState({
            isGuessing: true
        })

        this.computerFirstGuess();
    }

    computerFirstGuess() {

        let guess = [];
        for (let i = 0; i <= 3; i++) {
            guess[i] = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }

        let guessObject = {
            color1: guess[0],
            color2: guess[1],
            color3: guess[2],
            color4: guess[3],
            id: this.state.nGuesses
        }

        this.setState({
            currentGuess: guessObject,
            isGuessing: true,
            isFirstGuess: false
        })
}

    updateArrayGuessCheck(check) {
        
        let currentGuess = this.state.currentGuess;
        currentGuess.correctColor  = check.correctColor;
        currentGuess.correctPosition  = check.correctPosition;
       
        
        this.setState({
            computerGuesses: [...this.state.computerGuesses, currentGuess],
            isDispGuess: true
        })

        this.setState(curState => ({ nGuesses: curState.nGuesses + 1 }));
        this.computerNextGuesses()
    }

    computerNextGuesses() {

        let guess = [];
        for (let i = 0; i <= 3; i++) {
            guess[i] = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }

        let guessObject = {
            color1: guess[0],
            color2: guess[1],
            color3: guess[2],
            color4: guess[3],
            id: this.state.nGuesses + 1
        }

        this.setState({
            currentGuess: guessObject,
            isDispGuess: true
        })
    }

    render() {
       
        let win = this.state.computerGuesses.filter(ca => ca.correctPosition==="4");
            
        console.log(win);
        console.log(this.state.computerGuesses);
console.log(win.length);

        let render;
        if (!this.state.isGuessing) {
            render = <div></div>
        } else if (this.state.isGuessing && this.state.nGuesses <= 10 && win.length !== 1) {
            render = <UserCodeCheck colors={this.state.currentGuess} updateArrayGuessCheck={this.updateArrayGuessCheck} n={this.state.nGuesses} />
        } else if (win.length === 1) {
            render = <h4 className="resultM"> Correct Guess! You Lost! Press Start Over to play again</h4>
        } else {
            render = <h4 className="result">10 wrong guesses! You Won! Press Start Over to play again</h4>
        }

        return (
            <div>
                <h1 className="mastermind">Codemaker</h1>

                <div style={{ margin: "50px" }}>

                    {this.state.isSettingCode ? (
                        <Usercode colors={this.props.colors} setCode={this.setCode} />
                    ) : (
                        <Code colors={this.state.userCode} />
                    )}

                    {this.state.isFirstGuess ? (
                        <Button color="warning" onClick={this.handleClick} className="guess">Press to start computer guessing</Button>
                    ) : (
                        <div></div>
                    )}

                    {render}

                    {this.state.isDispGuess ? (
                        this.state.computerGuesses.map(ca =>
                            <CodeDispMaker colors={ca} arrayCheck={this.state.arrayGuessCheck} key={ca.id} n={this.state.nGuesses} />)
                    ) : (
                        <div></div>
                    )}

                </div>
                <div style={{ paddingBottom: "400px", paddingTop: "20px" }}>
                    <Button color="primary" href="/Home">
                        Start Over
                    </Button>
                </div>
            </div >
        );
    }
}

export default Codemaker;
