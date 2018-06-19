import React from 'react';
import { setNameFilter, selectAll, selectBuy, selectSell, sortByDate, sortByName, setStartDate, setEndDate } from '../actions/filters';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

class TransactionFilters extends React.Component {
  state = {
    focusedInput: null
  };

  onNameFilterChange = (e) =>{
    this.props.dispatch(setNameFilter(e.target.value))
  };

  onSelectTypeChange = (e) => {
    if(e.target.value === 'all'){
      this.props.dispatch(selectAll());
    } else if (e.target.value === 'buy'){
      this.props.dispatch(selectBuy());
    } else if (e.target.value === 'sell'){
      this.props.dispatch(selectSell());
    }
  }

  onSortByChange = (e) => {
    if(e.target.value === 'date'){
      this.props.dispatch(sortByDate());
    } else if (e.target.value === 'name'){
      this.props.dispatch(sortByName());
    }
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.name} onChange={this.onNameFilterChange}/>
        <select value={this.props.filters.selectType} onChange={this.onSelectTypeChange}>
          <option value="all">All</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          startDateId="startDate"
          endDate={this.props.filters.endDate}
          endDateId="endDate"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          isOutsideRange={() => false}   
          showClearDates={true}    
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
  filters: state.filters
})

export default connect(mapStateToProps)(TransactionFilters);