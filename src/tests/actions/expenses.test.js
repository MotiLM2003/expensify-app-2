import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// testing Remove expense aciton
test('should setup remove expense', () => {
  const action = removeExpense('1234');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234',
  });
});

// testing edit expense action with
test('edit expense action', () => {
  const expense = { id: '1234', note: 'some new note' };
  const action = editExpense(expense);

  expect(action).toEqual({ type: 'EDIT_EXPENSE', expense: expense });
});

test('should setup add expense action object  with provided values', () => {
  const expense = {
    id: '123213',
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this was last months rent',
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String),
    },
  });
});
