import React from 'react';
import { connect } from 'react-redux';
import { getVisibleExpenses } from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expense-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ totalAmount, length }) => {
  const expenseWord = length === 1 ? 'expense' : 'expenses';
  const summary =
    length === 0 ? (
      'No expense available.'
    ) : (
      <React.Fragment>
        Viewing {length} {expenseWord} totaling
        {numeral(totalAmount).format('$0,0.00')}
      </React.Fragment>
    );
  return (
    <div>
      <h1>{summary}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    totalAmount: getExpensesTotal(expenses),
    length: expenses.length,
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
