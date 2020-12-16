import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseForm } from '../../components/ExpenseForm';
import { expenses } from '../fixtures/expense';
import moment from 'moment';
test('should render expense form component without adta', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form component with  expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'new test description';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: value, name: 'description' } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
  const value = 'new test note';
  const wrapper = shallow(<ExpenseForm />);

  wrapper
    .find('textarea')
    .at(0)
    .simulate('change', {
      target: {
        name: 'note',
        value,
      },
    });

  expect(wrapper.state('note')).toBe(value);
});

test('should set valid value to amount', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: {
        name: 'amount',
        value: value,
      },
    });

  expect(wrapper.state('amount')).toBe(value);
});

test('should set invalid value to amount', () => {
  const value = '12.122';
  const wrapper = shallow(<ExpenseForm />);
  const defaultValue = wrapper.state('amount').value;
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: {
        name: 'amount',
        value: value,
      },
    });

  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submiision', () => {
  // setting expense that'll will be used during the test
  const expense = expenses[0];

  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expense} onSubmit={onSubmitSpy} />
  );

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith({
    id: expense.id,
    description: expense.description,
    amount: expense.amount,
    note: expense.note,
    createdAt: expense.createdAt,
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused state on focusChanged', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
