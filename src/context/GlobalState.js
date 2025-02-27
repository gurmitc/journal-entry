import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  entries: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteEntry(id) {
    dispatch({
      type: 'DELETE_ENTRY',
      payload: id
    });
  }

  function addEntry(entrie) {
    dispatch({
      type: 'ADD_ENTRY',
      payload: entrie
    });
  }

  return (<GlobalContext.Provider value={{
    entries: state.entries,
    deleteEntry,
    addEntry
  }}>
    {children}
  </GlobalContext.Provider>);
}