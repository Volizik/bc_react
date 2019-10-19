import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {HomeView} from "../views/Home";
import {ChatView} from "../views/Chat";
import {Header} from "../components/Header";

export const HomeLayout = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact>
                <HomeView />
            </Route>
            <Route path="/:chatId">
                <ChatView />
            </Route>
        </Switch>
    </Router>
);
