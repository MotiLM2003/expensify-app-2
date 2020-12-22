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

export const startRemoveExpense = (id) => (dispatch) => {
  console.log(id);
  database
    .ref(`expenses/${id}`)
    .remove()
    .then(() => dispatch(removeExpense(id)));
};

// EDIT EXPENSE
export const editExpense = (expense) => (dispatch) => {
  database.ref(`expenses/${expense.id}`).update(expense);
  dispatch({
    type: 'EDIT_EXPENSE',
    expense: expense,
  });
};

// GET EXPENSES
export const getExpenses = (expenses) => {
  return {
    type: 'GET_EXPENSES',
    payload: expenses,
  };
};

export const startGetExpenses = () => {
  return (dispatch) => {
    return database
      .ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((expense) => {
          console.log(expense.val());
          console.log(expense.key);
          expenses.push({
            ...expense.val(),
            id: expense.key,
          });
        });

        dispatch(getExpenses(expenses));
      });
  };
};
