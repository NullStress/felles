import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./Person.css";

class Person extends Component{
    render(){
        return(
            <div className="Person">
                <span>{this.props.value.name}</span>
            </div>
        );
    }
}

export default hot(module)(Person);