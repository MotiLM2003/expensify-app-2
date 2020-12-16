import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expense';
import { EditExpensePage } from '../../components/EditExpensePage';
let wrapper, history, editExpense, expense, removeExpense;
beforeEach(() => {
  history = { push: jest.fn() };
  editExpense = jest.fn();
  expense = expenses[0];
  removeExpense = jest.fn();
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      history={history}
      expense={expense}
      removeExpense={removeExpense}
    />
  );
});

test('should render edit expanse component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense on submit', () => {
  wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expense);
});

test('should handle remove expens', () => {
  wrapper.find('button').at(0).simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(removeExpense).toHaveBeenCalled();
});
