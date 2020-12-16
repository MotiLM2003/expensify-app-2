import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = (props) => {
  const { id, description, amount, createdAt } = props;
  return (
    <div>
      <Link to={`/edit/${id}`}>
        {' '}
        <h1>{description}</h1>
      </Link>
      <p>
        id = {id}
        {amount} - create at: {moment(createdAt).format('DD/MM/yyyy')}
      </p>
    </div>
  );
};

export default connect()(ExpenseListItem);
