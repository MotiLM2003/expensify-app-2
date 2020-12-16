import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/appRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const { expenses, filters } = store.getState();
});

store.dispatch(
  addExpense({
    id: 1,
    description: 'Water Bill',
    amount: 4500,
    createdAt: 1608026400000,
  })
);

store.dispatch(
  addExpense({
    id: 2,
    description: 'Rent Bill',
    amount: 5500,
    createdAt: 1606816800000,
  })
);

store.dispatch(
  addExpense({
    id: 3,
    description: 'Test Bill',
    amount: 25,
    createdAt: 1606903200000,
  })
);

store.dispatch(
  addExpense({
    id: 4,
    description: 'Test - 2 Bill',
    amount: 178.5,
    createdAt: 1608458400000,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />;
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
