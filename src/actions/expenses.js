import { database } from '../firebase/firebase';

// ADD EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense,
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const expense = expenseData;
    database
      .ref(`users/${uid}/expenses`)
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

export const startRemoveExpense = (id) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  database
    .ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then(() => dispatch(removeExpense(id)));
};

// EDIT EXPENSE
export const editExpense = (expense) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  database.ref(`users/${uid}/expenses/${expense.id}`).update(expense);
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once('value')
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((expense) => {
          expenses.push({
            ...expense.val(),
            id: expense.key,
          });
        });

        dispatch(getExpenses(expenses));
      });
  };
};
