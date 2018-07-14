import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeTransaction } from '../actions/transactions';
import { Link } from 'react-router-dom';

const TransactionListItem = (props) => (
  <React.Fragment>
    <div>{props.name}</div>
    <div>{props.type}</div>
    <div>{props.price}</div>
    <div>{props.amount}</div>
    <div>{props.date.format('DD/MM/YY')}</div>
    <div><Link className="btn" to={`/edit/${props.id}`}>Edit</Link></div>
  </React.Fragment>
);

export default TransactionListItem;