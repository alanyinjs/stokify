import moment from 'moment';

const selectTransactions = (transactions, { name, selectType, sortBy, startDate, endDate }) => { 
  return transactions.filter((transaction) => {
    const nameMatch = typeof name !== 'string' || transaction.name.toLowerCase().includes(name.toLowerCase());
    const typeMatch = selectType === 'all' ? true : selectType === transaction.type;
    const startDateMatch = startDate ? startDate.isSameOrBefore (transaction.date, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(transaction.date, 'day') : true;
    console.log(nameMatch);
    return nameMatch && typeMatch && startDateMatch && endDateMatch;
  }).sort((a, b)=>{
    if (sortBy === "date"){
      return a.date.isSameOrBefore(b.date, 'day') ? 1 : -1;
    } else if(sortBy === "name"){
      return a.name > b.name ? 1 : -1;
    }
  });
}

export default selectTransactions