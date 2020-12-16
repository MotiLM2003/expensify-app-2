// SET FILTER TEXT
export const setTextFilter = (text = '') => {
  return { type: 'SET_TEXT_FILTER', text: text };
};
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  payload: 'amount',
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  payload: 'date',
});

export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
});

export const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
});
