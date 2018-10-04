import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Account.css";

class Account extends Component{
    render(){
        const account = this.props.value;
        return(
            <div className="Account">
                <span>{account.name}</span><span>{account.number}</span>
            </div>
        );
    }
}

export default hot(module)(Account);