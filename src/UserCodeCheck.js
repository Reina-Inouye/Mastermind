import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';

class UserCodeCheck extends Component {

    constructor(props) {
        super(props);
        this.state = { correctColor: "", correctPosition: "" };
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
        // const pick = { ...this.state, id: this.props.n };
        const pick = {...this.state}
        this.props.updateArrayGuessCheck(pick);
        this.setState({ correctColor: "", correctPosition: ""});
    }

    render() {
       
        let display = this.props.colors;

        return (
            <div>
                <div className="guess"> Guess #{this.props.n}</div>
                <div className="colordisp">
                    <div style={{ backgroundColor: display.color1, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: display.color2, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: display.color3, width: "40px", height: "40px", borderRadius: "50%" }}></div>
                    <div style={{ backgroundColor: display.color4, width: "40px", height: "40px", borderRadius: "50%" }}></div>

                </div >
                <Form onSubmit={this.handleSubmit}>
                    <div style={{ paddingTop: "20px" }}>
                        <label htmlFor="correctColor"></label>
                        <input
                            placeholder="# correct colors"
                            id="correctColor"
                            name="correctColor"
                            value={this.state.correctColor}
                            onChange={this.handleChange}
                        />

                        <label htmlFor="correctPosition"></label>
                        <input
                            placeholder="# in correct position"
                            id="correctPosition"
                            name="correctPosition"
                            value={this.state.correctPosition}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div style={{ padding: "20px" }}>
                        <Button color="success">Next Guess</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default UserCodeCheck;
