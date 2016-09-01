const initialState = {
  data: []
};

const AppState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
      if (state.data.indexOf(action.payload) === -1) {
        return { ...state, data: [...state.data, action.payload] };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default AppState;