import { createStore } from 'redux';
import rootReducer from  '../reducers';
import React from 'react';
import { node, string, oneOf } from 'prop-types';
//export default(initialState) => {
//    return createStore(rootReducer, initialState);
//}

const Form = ({ children, className, ...rest }) => {
    return (
	<form className={ className }>
	    { children }
	    <input type="submit" name="submit"/>
	</form>
    );
};




