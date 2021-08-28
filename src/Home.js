import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({ color1: "", color2: "", color3: "", color4: "" });
    }



    render() {
        return (
            <div>
                <h1 className="title">Welcome to <span className="mastermind"> Mastermind</span></h1>
                <h4> It's the <span className="mastermind">Codemaker </span>vs the <span className="mastermind">Codebreaker</span>!!!</h4>

                <h4>Would you like to be the Codemaker or the Codebreaker?</h4>

                <div className="But">
                    <Button className="But" color="success" href="/Codebreaker"> Codebreaker</Button>
                    <Button className="But" color="warning" href="/Codemaker"> Codemaker</Button>
                </div>
                <div className="rules">
                    <p >Codebreaker Rules:  Press a button so the computer generates a 4 color code.  You have 10 turns to guess the code.  </p>
                    <p >Codemaker Rules:  You come up with a 4 color code.  The computer has 10 turns to guess your code.  </p>
                </div>
                <div className="rules">
                    <h5>Enter your name to keep track of your score</h5>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="form">
                            <label htmlFor="name"></label>
                            <input
                                placeholder="First and Last Name"
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                    </Form>
                </div>
            </div >

        );
    }
}

export default Home;
