import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeTransaction } from '../actions/transactions';
import { Link } from 'react-router-dom';

const TransactionListItem = (props) => (
  <div>
    Transaction of {props.name} type {props.type} price {props.price} amount {props.amount} created at {props.date.format('DD/MM/YY')} 
    <button onClick={(e) => {e.preventDefault()}}>
      <Link to={`/edit/${props.id}`}>Edit</Link>
    </button>
  </div>
)

export default TransactionListItem;