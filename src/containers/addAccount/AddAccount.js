import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./AddAccount.css";

class AddAccount extends Component{
    render(){
        return(
            <div className="AddAccount">
                <h1>Legg til konto her</h1>
            </div>
        );
    }
}

export default hot(module)(AddAccount);