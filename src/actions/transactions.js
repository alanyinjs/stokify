import uuid from 'uuid';
import moment from 'moment';

// add transaction
export const addTransaction = (
  {
    name='',
    type='buy',
    price = 0,
    amount = 0,
    createdAt = moment()
  } = {}
) => ({
    type: 'ADD_TRANSACTION',
    transaction: {
      id: uuid(),
      name,
      type,
      price,
      amount,
      createdAt
    }
});


//edit transaction
export const editTransaction = (id, updates) => ({
  type: 'EDIT_TRANSACTION',
  id,
  updates
})

//remove transaction
export const removeTransaction = (id) => ({
  type: 'REMOVE_TRANSACTION',
  id
})