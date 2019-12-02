import React, { useReducer } from 'react';

const createDataContext = (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // i.e :  actions === { addBlogPost: (dispatch) => { return () => {}} }
    const boundActions = {};
    Object.keys(actions).forEach(action => {
      // This will create a actions Object with bounded by the `dispatch` function.
      boundActions[action] = actions[action](dispatch);
    });

    return (
        <Context.Provider
            value={{
              state,
              ...boundActions,
            }}
        >
          {children}
        </Context.Provider>
    );
  };

  return { Context, Provider }
};

export default createDataContext;