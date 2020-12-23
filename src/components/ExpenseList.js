import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { startGetExpenses } from './../actions/expenses';
import { setLoader } from './../actions/loader';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList = ({
  expenses,
  getExpenses,
  setLoaderData,
  loader,
}) => {
  useEffect(() => {
    if (expenses.length === 0) {
      getExpenses();
    }
  }, [getExpenses]);

  useEffect(() => {
    //  setLoaderData(false);
  }, []);

  return (
    <section className='list-layout'>
      {expenses.length === 0 ? (
        <div class='list-layout__no_result'>No results please try again.</div>
      ) : (
        <div className='list-layout__container'>
          <div className='list-layout__header'>
            <p>Expense</p>
            <p>Amount</p>
          </div>
          <div className='list-layout__item_container'>
            {expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getExpenses: () => dispatch(startGetExpenses()),
    setLoaderData: (isLoading) => dispatch(setLoader(isLoading)),
  };
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    loader: state.loader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
