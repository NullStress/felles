import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Account.css";

class AccountBalance extends Component{

    static formatNumber(number) {
        // Create our number formatter.
        var formatter = new Intl.NumberFormat('nb-NO', {
            style: 'currency',
            currency: 'NOK',
            maximumFractionDigits: 2,
        });
        const formattedNumber = formatter.format(number);
        return formattedNumber.substring(3, formattedNumber.length - 3)
    }

    render(){
        const accountBalance = this.props.value.balance;
        return(
            <div className="AccountBalance">
                <span>{AccountBalance.formatNumber(accountBalance)}</span>
            </div>
        );
    }
}

export default hot(module)(AccountBalance);