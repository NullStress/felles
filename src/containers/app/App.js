import React, {Component} from "react";
import {hot} from "react-hot-loader";
import { Link } from "react-router-dom"
import Accounts from "../accounts/Accounts"
import Person from "../../components/person/Person"
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Person/>
                <Accounts/>
                <Link to="/newaccount">legg til konto</Link>
            </div>
        );
    }
}

export default hot(module)(App);
