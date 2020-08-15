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
    case "REMOVE_CITY": {
      if(!state.active) return state;
      let citiesNew  = [...state.cities];
      const index = citiesNew.findIndex(tz => tz.timezone === state.active);
      if (index === -1) return state;
      citiesNew.splice(index, 1);
      return {
        ...state,
        active: '',
        cities: citiesNew,
      };
    }
    default:
      return state;
  }
};

export default reducer;
