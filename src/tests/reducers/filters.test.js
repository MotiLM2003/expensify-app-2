import filtersReducer from '../../reducers/filtersReducers';
import moment from 'moment';
test('should setup default filter state values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set text to filter reducer', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'new text',
  });
  expect(state.text).toBe('new text');
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('should set start date filter', () => {
  const newDate = 1000;
  const action = {
    type: 'SET_START_DATE',
    startDate: newDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(newDate);
});

test('should set end date filter', () => {
  const newDate = 1000;
  const action = {
    type: 'SET_END_DATE',
    endDate: newDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(newDate);
});
