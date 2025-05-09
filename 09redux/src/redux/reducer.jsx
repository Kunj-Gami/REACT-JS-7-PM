export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((_, e) => e !== action.payload);
    case "CLEAR_TODO":
      return sy
    default:
      return state;
  }
};
