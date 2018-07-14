import React from 'react';
import { connect } from 'react-redux';
import TransactionListItem from './TransactionListItem';
import selectTransactions from '../selectors/transactions';

const TransactionList = (props) => (
  <div>
    <h3>Transaction List</h3>
    <div className="transaction-list">
        <div className="transaction-list__header">Name</div>
        <div className="transaction-list__header">Transaction Type</div>
        <div className="transaction-list__header">Price</div>
        <div className="transaction-list__header">Amount</div>
        <div className="transaction-list__header">Time</div>
        <div></div>
      {props.transactions.map((transaction) => <TransactionListItem key={transaction.id} {...transaction} /> )}
    </div>
  </div>
);

const mapStateToProps = (state) =>{
  console.log("filtered transactions", selectTransactions(state.transactions, state.filters));
  return {
    transactions: selectTransactions(state.transactions, state.filters)
  };
};

export default connect(mapStateToProps)(TransactionList);