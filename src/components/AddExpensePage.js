import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <section className='expense-form-layout'>
        <h1>Add Expense Page</h1>
        <div className='container'>
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
