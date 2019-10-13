import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './component/header/header.connector';
import Home from './module/home/component/home.connector';
import Search from './module/search/components/search.connector';

const Routes = () => (
  <Fragment>
    <Header />
    <div className="layout">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </Fragment>
);

export default Routes;
