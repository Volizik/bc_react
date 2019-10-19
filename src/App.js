import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import {CookiesProvider} from "react-cookie";

import {HomeLayout} from "./layouts/HomeLayout";
import {LoginView} from "./views/Login";
import {RegistrationView} from "./views/Registration";
import {store} from "./store";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
    return (
        <CookiesProvider>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path='/login' component={LoginView} />
                        <Route path='/registration' component={RegistrationView} />
                        <PrivateRoute path='/' component={HomeLayout} />
                    </Switch>
                </Router>
            </Provider>
        </CookiesProvider>
    );
}

export default App;
