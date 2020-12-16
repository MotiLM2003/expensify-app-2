import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onUpdateExpense = (expense) => {
    this.props.editExpense(expense);
    this.props.history.push('/');
  };

  onRemoveExpense = () => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onUpdateExpense}
        />
        <button onClick={this.onRemoveExpense}>Remove expense</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (expense) => dispatch(editExpense(expense)),
    removeExpense: (id) => dispatch(removeExpense(id)),
  };
};

const stateToProps = (state, props) => () => {
  return {
    expense: state.expenses.find(
      (x) => x.id === parseInt(props.match.params.id)
    ),
  };
};

export default connect(stateToProps, mapDispatchToProps)(EditExpensePage);
