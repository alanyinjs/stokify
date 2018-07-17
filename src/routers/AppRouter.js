import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import StockDashboardPage from '../pages/StockDashboardPage';
import AddTransactionPage from '../pages/AddTransactionPage';
import EditTransactionPage from '../pages/EditTransactionPage';
import AboutPage from '../pages/AboutPage';
import HelpPage from '../pages/HelpPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Sidebar from '../layout/Sidebar';


const AppRouter = () => (
  <Router>
    <div className="main-page">
      <Header />
      <Sidebar/>
      <Switch>
        <Route path='/' component={StockDashboardPage} exact={true} />
        <Route path='/add' component={AddTransactionPage} />
        <Route path='/edit/:id' component={EditTransactionPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/help' component={HelpPage} />
        <Route path='/contact' component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
 
  </Router>
);

export default AppRouter;