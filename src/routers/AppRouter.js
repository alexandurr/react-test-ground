import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import NoFoundPage from '../components/NoFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                
                <Route component={NoFoundPage} />
            </Switch>
        </div> 
    </BrowserRouter>
);

export default AppRouter;