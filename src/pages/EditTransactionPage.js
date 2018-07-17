import React from 'react';
import { connect } from 'react-redux';
import { removeTransaction } from '../actions/transactions';
import TransactionForm from '../components/TransactionForm';

const EditTransactionPage = (props) => (
  <div>
  <TransactionForm transaction={props.transaction} />
    <button onClick={() => {
      props.dispatch(removeTransaction(props.match.params.id));
      props.history.push('/');
    }}>Remove Transaction</button>
  </div>
)

const mapStateToProps = (state, props) => ({
  transaction: state.transactions.find(transaction => transaction.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditTransactionPage);