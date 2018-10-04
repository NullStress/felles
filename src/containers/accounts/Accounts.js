import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Account from "../../components/account/Account"
import "./Accounts.css";

class Accounts extends Component {

    render() {
        return (
            <section>
                {this.props.value.map(function(entry, index) {
                return <Account key={index} value={entry}/>
            })}
            </section>
        );
    }
}

export default hot(module)(Accounts);