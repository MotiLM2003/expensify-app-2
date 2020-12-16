import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render expense list filter component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('shgould render expense list filters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  });

  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const tempText = 'test filter';
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: {
        value: tempText,
      },
    });
  expect(setTextFilter).toHaveBeenCalledWith(tempText);
});

test('should sort by date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: { value: value },
  });
  expect(sortByDate).toHaveBeenCalledWith();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount',
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment().add(8, 'years');
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: startDate,
    endDate: endDate,
  });
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('cleandarFocused')).toBe(calendarFocused);
});
