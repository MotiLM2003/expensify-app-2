import moment from 'moment';

export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  const result = expenses
    .filter((expense) => {
      const createAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createAtMoment, 'day')
        : true;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
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
