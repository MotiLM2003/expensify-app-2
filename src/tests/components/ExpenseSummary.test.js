import React from 'react';
import { expenses } from '../fixtures/expense';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
let wrapper,
  totalAmount = 100,
  length = 0;

beforeEach(() => {
  wrapper = shallow(<ExpensesSummary totalAmount={1000} length={0} />);
});

test('should render without expense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render single expense', () => {
  wrapper.setProps({ totalAmount: 2000, length: 1 });
  expect(wrapper).toMatchSnapshot();
});



test('should render multiple expenses', () => {
    wrapper.setProps({ totalAmount: 2000, length: 3 });
    expect(wrapper).toMatchSnapshot();
  });
  