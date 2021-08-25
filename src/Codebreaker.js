import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Codebreaker extends Component {
    render() {
        return (
            <div>
                <h1>Codebreaker</h1>
                <Button color="primary" href="/">
                    Go Back
                </Button>
            </div>
        );
    }
}

export default Codebreaker;
