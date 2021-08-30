import React, { Component } from 'react';
import {
    Row, Col, Card, CardText, CardTitle, Button, Form
} from 'reactstrap';
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
        this.setState({ name: ""});
    }



    render() {
        return (
            <div>
                <h1 className="title">Welcome to <span className="mastermind"> Mastermind</span></h1>
                <h4> It's the <span className="mastermind">Codemaker </span>vs the <span className="mastermind">Codebreaker</span>!!!</h4>

                <h4>Would you like to be the Codemaker or the Codebreaker?</h4>

                <Row >
                    <Col sm={{ size: "4", offset: 2 }}>
                        <Card body className="card">
                            <CardTitle tag="h5" className="cardTitle"> <span className="mastermind">Codebreaker  </span>Rules</CardTitle>
                            <CardText>As the Codebreaker you press a button so the computer generates the 4 color code and you have 10 turns to guess the code. At each turn, the computer will let you know how many colors you guessed correctly and how many were in the right position.</CardText>
                            <Button className="But" color="success" href="/Home/Codebreaker"> Let's Play Codebreaker</Button>
                        </Card>
                    </Col>
                    <Col sm={{ size: "4"}}>
                        <Card body className="card">
                            <CardTitle tag="h5" className="cardTitle"> <span className="mastermind">Codemaker  </span> Rules</CardTitle>
                            <CardText>As the Codemaker you come up with the 4 color code.  The computer has 10 turns to guess your code. At each turn, you let the computer know how many colors were guessed correctly and how many were in the right position.                 </CardText>
                            <Button className="But" color="warning" href="/Home/Codemaker"> Let's Play Codemaker</Button>
                        </Card>
                    </Col>
                </Row>


                <div className = "rules">
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
                <div style={{ paddingBottom: "30px"}}>
                    <Button color="primary" href="/">
                        Back to Landing Page
                    </Button>
                </div>
            </div >

        );
    }
}

export default Home;
