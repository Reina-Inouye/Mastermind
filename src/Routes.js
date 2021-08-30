import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Codebreaker from './Codebreaker';
import Codemaker from './Codemaker';
import Home from './Home';
import LandingPage from './LandingPage';


class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route
                        exact path="/"
                        render={() => <LandingPage/>}/>
                    <Route
                        exact path="/Home"
                        render={() => <Home colors={this.props.colors}/>} />
                    <Route
                        exact path="/Home/Codemaker"
                        render={() => <Codemaker colors={this.props.colors} />} />
                    <Route
                        exact path="/Home/Codebreaker"
                        render={() => <Codebreaker colors={this.props.colors} />} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default Routes;


