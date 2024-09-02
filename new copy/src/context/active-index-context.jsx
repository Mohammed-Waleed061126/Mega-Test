import React, { createContext, useReducer } from 'react';

const ActiveIndexContext = createContext();

const initialState = {
  activeIndex: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    // Your reducer cases
    default:
      return state;
  }
};

export function ActiveIndexProvider({ children }) {
  const [stateSubmit, dispatchSubmit] = useReducer(reducer, initialState);

  return (
    <ActiveIndexContext.Provider value={{ stateSubmit, dispatchSubmit }}>
      {children}
    </ActiveIndexContext.Provider>
  );
}

export default ActiveIndexContext;
