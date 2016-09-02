const initialState = {
  data: []
};

const AppState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTENT':
      const check = state.data.findIndex(x => x.id === action.payload.id);
      if (check === -1) {
        return { ...state, data: [...state.data, action.payload] };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default AppState;