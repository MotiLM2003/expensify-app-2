import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filterReucer from '../reducers/filtersReducers';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReucer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
