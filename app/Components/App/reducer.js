const initialState = {
  data: [
    { p: 1, title: 'test' }
  ]
};

const AppState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default AppState;