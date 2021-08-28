import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Home.css';

class Home extends Component {

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
                    <p >Codebreaker Rules:  The computer comes up with a 4 color code.  You have 10 tries to guess the code.  </p>
                    <p >Codemaker Rules:  You come up with a 4 color code.  The computer has 10 tries to guess your code.  </p>
                </div>
            </div >

        );
    }
}

export default Home;
