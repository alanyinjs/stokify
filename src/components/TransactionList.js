import React from 'react';
import { connect } from 'react-redux';
import TransactionListItem from './TransactionListItem';
import selectTransactions from '../selectors/transactions';

const TransactionList = (props) => (
  <div>
    <h3>Transaction List</h3>
    {props.transactions.map((transaction) => <TransactionListItem key={transaction.id} {...transaction} /> )}
  </div>
);

const mapStateToProps = (state) =>{
  console.log("filtered transactions", selectTransactions(state.transactions, state.filters));
  return {
    transactions: selectTransactions(state.transactions, state.filters)
  };
};

export default connect(mapStateToProps)(TransactionList);