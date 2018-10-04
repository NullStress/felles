import React, {Component} from "react";
import {hot} from "react-hot-loader";
import { Link } from "react-router-dom"
import Accounts from "../accounts/Accounts"
import Person from "../../components/person/Person"
import "./App.css";
import axios from "axios";
import * as Constants from "../../constants";
import Account from "../../components/account/Account";

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
        return this.getPerson(ssn).accounts;
    }

    getPerson(ssn) {
        let foundPerson = {"accounts" : []};
        if(this.state.persons[0]) {
            this.state.persons.forEach(person => {
                if (person.ssn === (ssn)) {
                    foundPerson = person;
                }
            });
        }
        return foundPerson
    }

    renderPerson(ssn) {
        return <Person value={this.getPerson(ssn)}/>
    }


    renderAccounts(ssn) {
        return <Accounts value={this.getAccounts(ssn)}/>
    }

    render() {
        const ssn = "10128512336";
        let accounts = this.getAccounts();
        console.log(accounts);
        return (
            <div className="App">
                {this.renderPerson(ssn)}
                {this.renderAccounts(ssn)}
                <Link to="/newaccount">legg til konto</Link>
            </div>
        );
    }
}

export default hot(module)(App);
