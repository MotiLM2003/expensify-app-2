import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../fixtures/expense';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('should render expense list item component', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem key={expense.id} {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
