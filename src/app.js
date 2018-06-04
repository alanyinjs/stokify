import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import AppRouter from './routers/AppRouter';
import moment from 'moment';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { addTransaction } from './actions/transactions';
import { setNameFilter, sortByDate, sortByName, setStartDate, setEndDate } from './actions/filters';


const root = document.getElementById('app');

const store = configStore();

store.dispatch(addTransaction({name:"ASX",type:"buy", price:500, amount:1000, createdAt: moment('2008-09-09')}));

store.dispatch(addTransaction({name:"BHP",type:"buy", price:300, amount:1000, createdAt: moment('2008-09-09')}));

store.dispatch(addTransaction({name:"SGP",type:"buy", price:1000, amount:1000, createdAt: moment('2008-09-09')}));

store.dispatch(setNameFilter("MGC"));

store.dispatch(sortByDate());

store.dispatch(setStartDate(moment()));

store.dispatch(setEndDate(moment()));



const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, root);


