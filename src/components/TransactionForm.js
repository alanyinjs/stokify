import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';


class TransactionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.transaction ? {
      ...props.transaction,
      focused: false
    } : {
      name:'',
      type:'buy',
      price:'',
      amount:'',
      date: undefined,
      focused: false
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState({name});
  }

  onTypeChange = (e) => {
    const type = e.target.value;
    this.setState({type});
  }

  onPriceChange = (e) => {
    const price = e.target.value;
    if(!price || price.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState({price});
    }
  }

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}$/)){
      this.setState({amount});
    }
  }

  onDateChange = date => this.setState({date});

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.type || !this.state.price || !this.state.amount || !this.state.date){
      this.setState(() => ({error: 'Please provide all required fields.'}));
    } else {
      this.setState(() => ({error: ''}));
      this.props.onSubmit({
        name: this.state.name,
        type: this.state.type,
        price: parseFloat(this.state.price) * 100,
        amount: parseInt(this.state.amount, 10),
        date: this.state.date
      });
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>} 
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="ASX Stock Code"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <select value={this.state.type} onChange={this.onTypeChange}>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
          <input 
            type="text"
            placeholder="Price"
            value={this.state.price}
            onChange={this.onPriceChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })} 
            id="date"
            isOutsideRange={() => false}
          />
          <button>Save Transaction</button>
        </form>
      </div>
    )
  }
}

export default TransactionForm;