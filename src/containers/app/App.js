import React, {Component} from "react";
import {hot} from "react-hot-loader";
import { Link } from "react-router-dom"
import Accounts from "../accounts/Accounts"
import Person from "../../components/person/Person"
import "./App.css";
import axios from "axios";
import * as Constants from "../../constants";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get(Constants.BASE_PATH + "persons")
            .then(response => {
                // handle success
                console.log("success");
                this.setState({persons: response.data});
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
    }

    getAccounts(ssn) {
        let accounts = [];
        if(this.state.persons[0]) {
            this.state.persons.forEach(person => {
                if(person.ssn === (ssn)) {
                    accounts = person.accounts;
                }
            })
        }
        return accounts;
    }

    render() {
        let accounts = this.getAccounts("10128512336");
        console.log(accounts);
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
