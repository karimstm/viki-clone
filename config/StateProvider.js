import { createContext, useContext, useReducer } from "react";

// Setup the data layer
export const StateContext = createContext();

// Wrap our app component,
// so we can access state anywher in our app
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
