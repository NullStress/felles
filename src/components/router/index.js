import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "../../containers/app/App"
import AddAccount from "../../containers/addAccount/AddAccount"
import SharedAccount from "../../containers/sharedAccount/SharedAccount"

export const routes = {
    felles: {
        root: '/',
        newaccount: '/newaccount',
        sharedaccount: '/sharedaccount',
    },
};

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={routes.felles.root} component={App}/>
                <Route path={routes.felles.newaccount} component={AddAccount}/>
                <Route path={routes.felles.sharedaccount} component={SharedAccount}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
