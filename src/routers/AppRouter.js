import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import StockDashboardPage from '../components/StockDashboardPage';
import AddStockPage from '../components/AddStockPage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';


const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={StockDashboardPage} exact={true} />
        <Route path='/add' component={AddStockPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
 
  </Router>
);

export default AppRouter;