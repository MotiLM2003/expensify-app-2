import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id: id,
});

// EDIT EXPENSE
const editExpense = ({ id, expense }) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  expense: expense,
});

// SET FILTER TEXT
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text,
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  payload: 'amount',
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  payload: 'date',
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
});

setEndDate;
// EXPENSES REDUCER
const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': {
      return [...state, action.expense];
    }
    case 'REMOVE_EXPENSE': {
      return state.filter(({ id }) => id !== action.id);
    }
    case 'EDIT_EXPENSE': {
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.expense };
        } else {
          return item;
        }
      });
    }

    default: {
      return state;
    }
  }
};

// FILTERS REDUCERS

const defaultFilters = {
  text: 'rent',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = defaultFilters, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER': {
      return { ...state, text: action.text };
    }
    case 'SORT_BY_AMOUNT': {
      return { ...state, sortBy: 'amount' };
    }
    case 'SORT_BY_DATE': {
      return { ...state, sortBy: 'date' };
    }
    case 'SET_START_DATE': {
      return { ...state, startDate: action.startDate };
    }

    case 'SET_END_DATE': {
      return { ...state, endDate: action.endDate };
    }

    default: {
      return state;
    }
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  const result = expenses
    .filter((expense) => {
      const startDateMath = expense.createdAt >= startDate;
      const endDateMatch = expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMath && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? -1 : 1;
      } else {
        return a.amount < b.amount ? 1 : -1;
      }
    });

  return result;
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const expneses = store.getState();
  onsole.log(expneses);
  const visibleExpenses = getVisibleExpenses(
    expneses.expenses,
    expneses.filters
  );
});

const id1 = store.dispatch(
  addExpense({
    description: 'rent',
    note: 'this was the final payment for that address',
    amount: 54500,
    createdAt: 103,
  })
);

const id2 = store.dispatch(
  addExpense({
    description: 'January Rent',
    note: 'this was ',
    amount: 3233,
    createdAt: 101,
  })
);

store.dispatch(setStartDate(60));
store.dispatch(setEndDate(200));
store.dispatch(sortByDate());

const demoState = {
  expenses: [
    {
      id: '123213213123',
      description: 'January movie',
      note: 'this was the final payment for that address',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'Januar1y',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
