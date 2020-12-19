import { getExpensesTotal } from '../../selectors/expense-total';
import { expenses } from '../fixtures/expense';
import { shallow } from '';
import {ExpensesSummary } from '../../components/ExpensesSummary';


test('should return 0 if no expenses', () => {
  const results = getExpensesTotal([]);
  expect(results).toBe(0);
});

test('should return total expenses amount', () => {
  const results = getExpensesTotal(expenses);
  expect(results).toBe(114195);
});
