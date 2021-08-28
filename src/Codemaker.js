import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Usercode from './Usercode';
import Code from './Code';
import './Code.css';

class Codemaker extends Component {
    constructor(props) {
        super(props);
        this.state = { userCode: [], isSettingCode: true }
        this.setCode = this.setCode.bind(this);
       
    }

    setCode(code) {
        console.log(code);
        this.setState({
            userCode: code,
            isSettingCode: false
        })
        console.log(this.state.userCode)
       
    }


    render() {
        return (
            <div>
                <h1 className="mastermind">Codemaker</h1>
                <h4>Pick your Code</h4>
                <div style={{ margin: "50px" }}>

                {this.state.isSettingCode? (
                     <Usercode colors={this.props.colors} setCode={this.setCode}/>
                ) : (
                   <Code colors={this.state.userCode} />
                    )
                }



                </div>
                <div style={{ paddingBottom: "300px", paddingTop:"20px" }}>
                    <Button color="primary" href="/">
                        Start Over
                    </Button>
                </div>
            </div>
        );
    }
}

export default Codemaker;
