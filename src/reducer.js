import { cities } from "./constants/timezone";

export const inititalState = {
  cities: cities,
  city: {
    name: "",
    timezone: ""
  },
  active: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CITY":
      return {
        ...state,
        city: { ...action.data },
        active: action.data.timezone,
      };
    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.data],
      };
    default:
      return state;
  }
};

export default reducer;
