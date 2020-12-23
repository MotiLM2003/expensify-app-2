export default (state = { isLoading: false }, action) => {
  switch (action.type) {
    case 'SET_LOADER': {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
};
