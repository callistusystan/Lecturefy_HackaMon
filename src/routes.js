import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Presentation from './components/presentation';
import HomePage from './components/homepage';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="presentation" component={Presentation} />
    </Route>
);
