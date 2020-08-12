export const inititalState = {
  city: {
    name: "",
    timezone: ""
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CITY":
      return {
        city: { ...action.data }
      };
    default:
      return state;
  }
};

export default reducer;
