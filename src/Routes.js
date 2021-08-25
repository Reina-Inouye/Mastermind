import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Codebreaker from './Codebreaker';
import Codemaker from './Codemaker';
import Home from './Home';


class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <Home colors={this.props.colors}/>} />
                    <Route
                        exact path="/Codemaker"
                        render={() => <Codemaker colors={this.props.colors} />} />
                    <Route
                        exact path="/Codebreaker"
                        render={() => <Codebreaker colors={this.props.colors} />} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Routes;


