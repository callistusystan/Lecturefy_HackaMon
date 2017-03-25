import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Header from './components/header';
import Presentation from './components/presentation';
import HomePage from './components/homepage';
import AuthcatePage from './components/authcate-page.js';
export default (
    <Route path="/" >
        <IndexRoute component={HomePage} />
        <Route path="presentation" component={Header} >
          <IndexRoute component={Presentation} />
        </Route>
        <Route path="login/" component={AuthcatePage}/>
    </Route>
);
