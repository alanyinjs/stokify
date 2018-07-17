import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import TransactionForm from '../components/TransactionForm';
import { addTransaction } from '../actions/transactions';

//TODO: Add transaction 



class AddTransactionPage extends React.Component{

  onSubmit = (transaction) => {
    this.props.dispatch(addTransaction({
      ...transaction
    }));
    this.props.history.push('/');    
  };

  render(){
    return (
      <div>
        <p>Adding Transaction Form</p>
        <TransactionForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(AddTransactionPage);