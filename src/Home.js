import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div>

                <h1 className="title">Welcome to <span className="mastermind"> Mastermind</span></h1>
                <h4> It's the Codemaker Vs the Codebreaker</h4>

                <h4>Would you like to be the Codemaker or Codebreaker?</h4>


                <div className="But">
                    <Button className="But" color="success" href="/Codebreaker"> Codebreaker</Button> 
                    <Button className="But" color="warning" href="/Codemaker"> Codemaker</Button>
                </div>





            </div >

        );
    }
}

export default Home;
