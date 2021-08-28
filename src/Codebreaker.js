import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Userpick from './Userpick';
import Codedisplay from './Codedisplay.js';
import Code from './Code.js';
import './Code.css';

class Codebreaker extends Component {
    constructor(props) {
        super(props);
        this.state = { colorGuesses: [], isFirstGuess: true, nGuesses:1, computerCode: [] }
        this.updateGuesses = this.updateGuesses.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateGuesses(pick) {
        console.log(pick);
        this.setState({
            colorGuesses: [...this.state.colorGuesses, pick],
            isFirstGuess: false
        })
        this.setState(curState => ({ nGuesses: curState.nGuesses + 1 }));
        console.log(this.state.colorGuesses);
        console.log(this.state.nGuesses);
    }

    handleClick() {
        let code = [];
        for (let i = 0; i <= 3; i++) {
            code[i] = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        }
        this.setState({ computerCode: code });
        console.log(`code is ${code}`);
    }

    render() {
        let render;

        if (this.state.nGuesses <= 10) {
            render = <Userpick colors={this.props.colors} updateGuesses={this.updateGuesses} n={this.state.nGuesses}/>
        } else {
            render = <h4>Last Chance to Win!</h4>
        }


        return (
            <div>
                <h1 className="mastermind">Codebreaker</h1>
                <div>
                    <Button className="guess" color="warning" onClick={this.handleClick}>Press to generate the code</Button>
                </div>

                <h4 className="guess">Guess the Code!</h4>
                <div style={{ margin: "50px" }}>
                    {render}
                </div>
                {this.state.isFirstGuess ? (
                    <div></div>
                ) : (
                    this.state.colorGuesses.map(ca =>
                        <Codedisplay colors={ca} code={this.state.computerCode} key={ca.id} />
                    )
                )}
                {this.state.nGuesses===11? (<Code colors={this.state.computerCode}/>):(<div></div>)}

                <div style={{ paddingBottom: "300px", paddingTop: "20px" }}>
                    <Button color="primary" href="/">
                        Start Over
                    </Button>
                </div>
            </div>
        );
    }
}

export default Codebreaker;
