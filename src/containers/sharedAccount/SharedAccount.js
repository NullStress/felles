import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./SharedAccount.css";

class SharedAccount extends Component{
    render(){
        return(
            <div className="SharedAccount">
                <h1>Opprett felleskonto</h1>
            </div>
        );
    }
}

export default hot(module)(SharedAccount);