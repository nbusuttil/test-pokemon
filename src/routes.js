import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './component/header/header.component';
import Home from './module/home/component/home.connector';

const Routes = () => (
  <Fragment>
    <Header />
    <div className="layout">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Fragment>
);

export default Routes;
