import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Account.css";

class Account extends Component{
    render(){
        return(
            <div className="Account">
                <span>Lønnskonto til Pia</span><span>1234 05 12345</span>
            </div>
        );
    }
}

export default hot(module)(Account);