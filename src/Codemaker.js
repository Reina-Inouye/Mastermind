import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Code.css';

class Codemaker extends Component {
    render() {
        return (
            <div>
                <h1 className="mastermind">Codemaker</h1>
                
                <Button color="primary" href="/">
                    Go Back
                </Button>
            </div>
        );
    }
}

export default Codemaker;
