import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import uuid from "uuid/v4";

class Userpick extends Component {

    constructor(props) {
        super(props);
        this.state = {color1:"", color2:"", color3:"", color4:"" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
handleChange(evt) {
    this.setState({
        [evt.target.name]:evt.target.value 
    });
}

handleSubmit(evt) {
    evt.preventDefault();
    const pick = { ...this.state, id: uuid() };
    // let pick = {...this.state}
    console.log(pick);
    this.props.updateGuesses(pick);
    this.setState({color1:"", color2:"", color3:"", color4:"" });
}
    
    render() {
        
        let colorList = this.props.colors.map((c) =>
            <span style={{color:c}} key={c}>{c}, </span>
        )
        return (
            <div>
                <h4>Pick 4 of these colors: {colorList}</h4>
                <Form onSubmit = {this.handleSubmit}>
                    <div>
                    <label htmlFor="color1"></label>
                    <input
                         placeholder="color 1"
                        id="color1"
                        name="color1"
                        value={this.state.color1}
                        onChange={this.handleChange}
                    />
                    
                    <label htmlFor="color2"></label>
                    <input
                        placeholder="color 2"
                        id="color2"
                        name="color2"
                        value={this.state.color2}
                        onChange={this.handleChange}
                    />
                    
                    <label htmlFor="color3"></label>
                    <input
                        placeholder="color 3"
                        id="color3"
                        name="color3"
                        value={this.state.color3}
                        onChange={this.handleChange}
                    />
                   
                    <label htmlFor="color4"></label>
                    <input
                        placeholder="color 4"
                        id="color4"
                        name="color4"
                        value={this.state.color4}
                        onChange={this.handleChange}
                    />
                    <Button>Check Guess</Button>
                    </div>
                   
                </Form>

            </div>
        );
    }
}

export default Userpick;