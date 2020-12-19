export const getExpensesTotal = (expenses) => {
  const reuslts = expenses.reduce((acc, { amount }) => (acc += amount), 0);
  return reuslts;
};
