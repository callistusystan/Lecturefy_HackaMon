import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Presentation from './components/presentation';
import AuthcatePage from './components/authcate-page.js';

import Header from './components/header';

import PollDialog from './components/dialog-checkbox';

export default (
    <Route path="/" >
        <IndexRoute component={AuthcatePage} />
        <Route path="presentation" component={Header}>
          <IndexRoute component={Presentation} />
        </Route>
        <Route path="test" component={PollDialog}/>
    </Route>
);
