import React from 'react';

const transactionsReducerDefaultState = [];

const transactionsReducer = (state = transactionsReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_TRANSACTION':
      return [
        ...state,
        action.transaction
      ];
    case 'EDIT_TRANSACTION':
      return state.map((transaction) => {
        if(transaction.id === action.id){
          return {
            ...transaction,
            ...action.updates
          }
        } else {
            return transaction;
        }
      });
    case 'REMOVE_TRANSACTION':
      return state.filter(({id}) => id !== action.id);
    default:
      return state;
  }
};

export default transactionsReducer;