import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Account from "./components/account/Account"
import Person from "./components/person/Person"
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person/>
                <Account/>
            </div>
        );
    }
}

export default hot(module)(App);
