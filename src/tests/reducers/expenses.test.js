import expenseReducer from '../../reducers/expensesReducer';
import moment from 'moment';
import { expenses } from '../fixtures/expense';
test('should set default state ([]) ', () => {
  const action = {
    type: '@@INIT',
  };
  const state = expenseReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should add an expense to the state', () => {
  const previousLength = expenses.length;
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '1',
      description: 'Gum',
      note: '',
      amount: 195,
      createdAt: moment(0).valueOf(),
    },
  };
  const state = expenseReducer(expenses, action);
  expect(state.length).toBe(previousLength + 1);
});

test('should remove an expense from the state', () => {
  const previousLength = expenses.length;
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '1',
  };
  const state = expenseReducer(expenses, action);
  expect(state.length).toBe(previousLength - 1);
});

test('should update expense from expenses', () => {
  const updatedExpense = {
    id: '1',
    description: 'Gum Berries',
    note: '',
    amount: 195,
    createdAt: moment(0).valueOf(),
  };

  const action = {
    type: 'EDIT_EXPENSE',
    expense: updatedExpense,
  };
  const state = expenseReducer(expenses, action);
  expect(state[0]).toEqual(updatedExpense);
});
