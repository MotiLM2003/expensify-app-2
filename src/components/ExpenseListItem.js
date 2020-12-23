import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = (props) => {
  const { id, description, amount, createdAt } = props;
  return (
    <div className='expense-list-item'>
      <div>
        <Link to={`/edit/${id}`}>
          <h1>{description}</h1>
        </Link>
        {moment(createdAt).format('DD/MM/yyyy')}
      </div>
      <h1>{numeral(amount / 100).format('$0,0.00')}</h1>
    </div>
  );
};

export default connect()(ExpenseListItem);
