import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expenses } from '../fixtures/expense';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test('should render add expense component ', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const testExpense = expenses[0];
  wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(testExpense);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(addExpense).toHaveBeenCalledWith(testExpense);
});
