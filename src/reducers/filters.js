import moment from 'moment';

const filtersReducerDefaultState = {
  name:'',
  sortBy: 'date',
  selectType: 'all',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_NAME_FILTER':
      return {
        ...state,
        name: action.name
      }
    case 'SELECT_ALL':
      return {
        ...state,
        selectType: 'all'
      }
    case 'SELECT_BUY':
      return {
        ...state,
        selectType: 'buy'
      }
    case 'SELECT_SELL':
      return {
        ...state,
        selectType: 'sell'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_NAME':
      return {
        ...state,
        sortBy: 'name'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

export default filtersReducer;