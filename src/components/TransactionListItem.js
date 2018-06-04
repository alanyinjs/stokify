import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeTransaction } from '../actions/transactions';

const TransactionListItem = (props) => (
  <div>
    {JSON.stringify(props.dispatch)}
    Transaction of {props.name} type {props.type} price {props.price} amount {props.amount} created at {props.createdAt.format('DD/MM/YY')} 
    <button onClick={() => {props.dispatch(removeTransaction(props.id))}}>Remove</button>
  </div>
)

export default connect()(TransactionListItem);