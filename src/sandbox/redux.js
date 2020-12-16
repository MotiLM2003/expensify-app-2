import { createStore } from 'redux';

const increment = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREAMENT',
  incrementBy,
});

const decreseCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
});

const setCount = ({ count = 10 } = {}) => ({
  type: 'SET',
  count,
});

const resetCount = () => ({
  type: 'RESET',
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREAMENT': {
      return { ...state, count: state.count + action.incrementBy };
    }
    case 'DECREMENT': {
      return { ...state, count: state.count - action.decrementBy };
    }
    case 'RESET': {
      return { ...state, count: 0 };
    }
    case 'SET': {
      return { ...state, count: action.count };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(countReducer);

const unsbscribe = store.subscribe(() => {
  store.getState();
});

// unsbscribe();

store.dispatch(increment({ incrementBy: 311 }));
store.dispatch(decreseCount({ decrementBy: 100 }));
store.dispatch(setCount({ count: 50 }));
store.dispatch(resetCount());
