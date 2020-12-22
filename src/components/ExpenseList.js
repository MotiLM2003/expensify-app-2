import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { startGetExpenses } from './../actions/expenses';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList = ({ expenses, getExpenses }) => {
  useEffect(() => {
    if (expenses.length === 0) {
      getExpenses();
    }
  }, [getExpenses]);
  return (
    <div>
      {expenses.length === 0 ? (
        <div>no Expense</div>
      ) : (
        expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getExpenses: () => dispatch(startGetExpenses()),
  };
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
