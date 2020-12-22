import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/appRouter';
import configureStore from './store/configureStore';
import { startGetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { firebase } from './firebase/firebase';

const store = configureStore();

store.subscribe(() => {
  const { expenses, filters } = store.getState();
});

const jsx = (
  <Provider store={store}>
    <AppRouter />;
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    console.log('logged out');
    history.push('/');
  }
});
