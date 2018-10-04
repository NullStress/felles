import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./Account.css";

class Account extends Component{

    static formatNumber(number) {
        return number.substring(0,4) + "." + number.substring(4,6) + "." + number.substring(6,11)
    }

    render(){
        const account = this.props.value;
        return(
            <div className="Account">
                <span>{account.name}</span><span>{Account.formatNumber(account.number)}</span>
            </div>
        );
    }
}

export default hot(module)(Account);