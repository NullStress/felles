import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
	<section className="main">
	    <form>
	       <input type="text"/>
	       <input type="submit"/>
	    </form>
	</section>
      </div>
    );
  }
}

export default hot(module)(App);
