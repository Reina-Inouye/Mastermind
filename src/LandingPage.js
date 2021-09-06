import React, { Component } from 'react';
import {
    Row, Col, Card, CardText, CardImg, CardBody, CardTitle, CardLink, Button
} from 'reactstrap';
import './LandingPage.css';


class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to <div className="mastermind">Mastermind!</div></h1>
                <div style={{ paddingBottom: "400px", paddingTop: "20px" }}>
                    <Row>
                        <Col sm={{ size: "8", offset: 2 }}>
                        <Card className = "mb-4">
                        <CardBody className= "CardText">
                            <CardText>
                    <p className="text"> Mastermind is a game my kids love to play.  The game is played with 2 players. One player, the codemaker, comes up with a color code by choosing 4 color pegs from a choice of 6 colors.  The codemaker inserts the pegs in the board in a certiain order and they are hidden from the other player, the codebreaker, who has 10 turns to guess the code.  After each turn the codemaker lets the codebreaker know how many colors were guessed correctly and of those, how many were in the correct position. </p>
                    <p className="text">In creating the app for this game, I wanted the app to be as similar to the board game as possible.  To that end I used React.js to create two games: one where the user is the codebreaker and in the other game, the computer is the codebreaker .  I realised pretty early on that it would be easier to write the code for the game where the user is codebreaker and so I started with that.  The code for the user as codebreaker is pretty much done where as the code for the user as codemaker is still a work in progress.  The game works but the computer makes guesses arbitrarily and is not able to make future guesses based on the results of the previous guesses. My next challenge will be to add code so that the computer is able to make more intelligent guesses. </p>
                    </CardText>
                    </CardBody>
                    </Card>
                     </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: "4", offset: 2 }}>
                            <Card>
                                <CardImg top width="10%" src="/assets/IMG_2728.JPG" className = "CardImage" alt="Mastermind Box" />
                                <CardBody>
                                    <CardTitle tag="h5">The Box</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={{ size: "4" }}>
                            <Card>
                                <CardImg top width="10%" src="/assets/IMG_2727.JPG" className = "CardImage"  alt="Mastermind game" />
                                <CardBody>
                                    <CardTitle tag="h5">The Game</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    

                    <Button color="danger" size ="lg" href="/Home" className="But">
                        Let's Play!!
                    </Button>

                    <h1>Meet the Engineer</h1>
                    <div>
                        <Row>
                            <Col sm={{ size: "4", offset: 4 }}>
                                <Card>
                                    <CardImg top width="10%" src="/assets/R_Inouye.jpg" alt="Reina Inouye Picture" />
                                    <CardBody>
                                        <CardTitle tag="h5">Reina Inouye</CardTitle>

                                        <CardText>I am an aspiring Front-End developer who has been practicing as a Structural Engineer for the past 20 years.  I live in Honolulu and work remotely for an office in San Francisco.  I love to code and am looking to apply the skills I have learnt in my engineering career to solving coding problems.</CardText>
                                                                            
                                        <CardLink href="https://github.com/Reina-Inouye" target="_blank"> <i class="fab fa-github fa-lg"/></CardLink>
                                        <CardLink href="https://www.linkedin.com/in/reina-inouye-s-e-05177516/" target="_blank"><i class="fab fa-linkedin fa-lg"/></CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
