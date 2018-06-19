import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import AppRouter from './routers/AppRouter';
import moment from 'moment';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { addTransaction } from './actions/transactions';
import { setNameFilter, sortByDate, sortByName, setStartDate, setEndDate, selectSell } from './actions/filters';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const root = document.getElementById('app');

const store = configStore();

store.dispatch(addTransaction({name:"ASX",type:"buy", price:500, amount:1000, createdAt: moment('2018-06-09')}));

store.dispatch(addTransaction({name:"BHP",type:"buy", price:300, amount:1000, createdAt: moment('2018-06-09')}));

store.dispatch(addTransaction({name:"SGP",type:"buy", price:1000, amount:1000, createdAt: moment('2018-06-07')}));
store.dispatch(addTransaction({name:"ORE",type:"buy", price:3400, amount:1000, createdAt: moment('2018-06-09')}));
store.dispatch(addTransaction({name:"A2M",type:"buy", price:2800, amount:1000, createdAt: moment('2018-06-22')}));
store.dispatch(addTransaction({name:"BAL",type:"buy", price:1000, amount:1000, createdAt: moment('2018-06-19')}));


const app = (
  <MuiThemeProvider>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(app, root);


