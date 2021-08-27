import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Userpick from './Userpick';
import Codedisplay from './Codedisplay.js';
// import Userpickdisp from './Userpickdisp';
import './Code.css';

class Codebreaker extends Component {
    constructor(props) {
        super(props);
        this.state = { colorGuesses: [], isGuessing: true, nGuesses: 0, computerCode: [] }
        this.updateGuesses = this.updateGuesses.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    updateGuesses(pick) {
        console.log(pick);
        this.setState({
            colorGuesses: [...this.state.colorGuesses, pick],
            isGuessing: false
        })
        this.setState(curState => ({ nGuesses: curState.nGuesses + 1 }));
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

        if (this.state.colorGuesses.length <= 10) {
            render = <Userpick colors={this.props.colors} updateGuesses={this.updateGuesses} />
        } else {
            render = <h4>"Game Over! Press Go Back to try again"</h4>
        }


        return (
            <div>
                <h1 className="mastermind">Codebreaker</h1>
                <div>
                    <Button className="guess" color="success" onClick={this.handleClick}>Press to generate the code</Button>
                </div>


                <h4 className="guess">Guess the Code!</h4>
                <div style={{ margin: "50px" }}>
                    {render}
                </div>
                {this.state.isGuessing ? (
                    <div></div>
                ) : (
                    this.state.colorGuesses.map(ca => 
                <Codedisplay colors={ca} code={this.state.computerCode} n={this.state.nGuesses} />)
                )}

                <div style={{ paddingBottom: "300px", paddingTop:"20px" }}>
                    <Button color="primary" href="/">
                        Go Back
                    </Button>
                </div>
            </div>
        );
    }
}

export default Codebreaker;
