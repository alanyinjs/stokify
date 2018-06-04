import React from 'react';
import { connect } from 'react-redux';
import TransactionListItem from './TransactionListItem';

const TransactionList = (props) => (
  <div>
    <h3>Transaction List</h3>
    {props.transactions.map((transaction) => <TransactionListItem key={transaction.id} {...transaction} /> )}
  </div>
);


const mapStateToProps = (state) =>{
  return state;
};


export default connect(mapStateToProps)(TransactionList);