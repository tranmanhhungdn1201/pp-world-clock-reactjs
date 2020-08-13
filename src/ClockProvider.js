import React, { createContext, useContext, useReducer } from "react";

//data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, intitalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intitalState)}>
    {children}
  </StateContext.Provider>
);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
