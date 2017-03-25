import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Presentation from './components/presentation';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Presentation} />
    </Route>
);
