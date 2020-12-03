const reducer = (state, action) => {
  switch (DeviceAcceleration.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    default:
      return state;
  }
};
export default reducer;
