import { createStore, combineReducers } from 'redux';
import transactionsReducer from '../reducers/transactions';
import filterReducer from '../reducers/filters';


export default () => {
  const store = createStore(
    combineReducers({
      transactions: transactionsReducer,
      filters: filterReducer
    }), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};