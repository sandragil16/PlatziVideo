
const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case actions.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.getVideoSource:
      return {
        ...state,
        playing:
          [...state.trends, ...state.originals].find(
            (item) => item.id === Number(action.payload),
          ) || [],
      };

    case actions.getVideoSearch:
      return {
        ...state,
        searchResult: [],
        list: [...state.trends, ...state.originals].filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      };

    default:
      return state;
  }
};
export default reducer;