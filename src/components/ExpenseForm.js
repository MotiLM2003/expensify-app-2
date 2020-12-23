import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const { expense } = this.props;
    this.state = {
      id: expense ? expense.id : 0,
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: expense ? expense.calendarFocused : false,
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const desc = e.target.value;
    this.setState({ description: desc });
  };

  handleEvent = (e) => {
    const amount = e.target.value;
    if (
      (e.target.name === 'amount' &&
        (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))) ||
      e.target.name !== 'amount'
    ) {
      this.setState({ [e.target.name]: amount });
    }
  };

  onDateChange = (createdAt) => {
    if (!createdAt) {
      return;
    }
    this.setState(() => ({ createdAt }));
  };

  onFocusChanged = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onAddExpenseSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error state.
      this.setState({
        error: 'Please provide description and amount :alien: ',
      });
    } else {
      this.setState({ error: '' });
      this.props.onSubmit({
        id: this.state.id,
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.error && (
          <p class='message warning mt-2 rad-xs'> {this.state.error}</p>
        )}
        <form
          onSubmit={this.onAddExpenseSubmit}
          className='expense-form-layout__form'
        >
          <input
            type='text'
            placeholder='Description'
            autoFocus
            name='description'
            value={this.state.description}
            onChange={this.handleEvent}
          />
          <input
            type='number'
            placeholder='Amount'
            name='amount'
            value={this.state.amount}
            onChange={this.handleEvent}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={({ focused }) =>
              this.setState({ calendarFocused: focused })
            }
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Add a note for your expense (optinal)'
            name='note'
            value={this.state.note}
            onChange={this.handleEvent}
          ></textarea>

          <button className='button primary w-250 rad-xs'>Add expense</button>

          <div></div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect()(ExpenseForm);
