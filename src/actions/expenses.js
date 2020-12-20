import { v4 as uuidv4 } from 'uuid';
import { database } from '../firebase/firebase';

// ADD EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense,
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const expense = expenseData;
    console.log(database);
    database
      .ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE EXPENSE
export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id: id,
  };
};

// EDIT EXPENSE
export const editExpense = (expense) => {
  return {
    type: 'EDIT_EXPENSE',
    expense: expense,
  };
};
