import React, { Component } from 'react';
import { Button } from 'reactstrap';


class Home extends Component {

    render() {
        return (
            <div>

                <h1>Welcome to Mastermind</h1>
                <h4>Would you like to be the Codemaker or Codebreaker?</h4>


                
                    <Button color ="success" href="/Codebreaker">
                        Codebreaker
                    </Button>
               
                
                    <Button color ="warning" href="/Codemaker">
                        Codemaker
                    </Button>
                
            </div >

        );
    }
}

export default Home;
