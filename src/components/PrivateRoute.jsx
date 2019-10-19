import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useCookies} from "react-cookie";
import axios from 'axios';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const [cookies] = useCookies(['Authorization']);
    const isAuthenticated = !!cookies['Authorization'];

    axios.defaults.headers['Authorization'] = isAuthenticated ? cookies['Authorization'] : '';

    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
        )} />
    )
};
