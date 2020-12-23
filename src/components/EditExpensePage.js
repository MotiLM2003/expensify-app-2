import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onUpdateExpense = (expense) => {
    this.props.editExpense(expense);
    this.props.history.push('/dashboard');
  };

  onRemoveExpense = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <section className='expense-form-layout'>
        <h1>Edit Expense</h1>
        <div className='container'>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onUpdateExpense}
          />
          <button
            className='button danger w-250 rad-xs'
            onClick={this.onRemoveExpense}
          >
            Remove expense
          </button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (expense) => dispatch(editExpense(expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
  };
};

const stateToProps = (state, props) => () => {
  return {
    expense: state.expenses.find((x) => x.id === props.match.params.id),
  };
};

export default connect(stateToProps, mapDispatchToProps)(EditExpensePage);
