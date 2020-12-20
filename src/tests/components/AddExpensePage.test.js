import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expenses } from '../fixtures/expense';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
});

test('should render add expense component ', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const testExpense = expenses[0];
  wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(testExpense);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startAddExpense).toHaveBeenCalledWith(testExpense);
});
