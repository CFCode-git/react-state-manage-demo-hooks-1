import { useContext, createContext, useReducer } from "react";
import PageAReducer from "./PageA/reducer";
import PageBReducer from "./PageB/reducer";
import PageAState from "./PageA/store";
import PageBState from "./PageB/store";

export const initStore = {
  ...PageAState,
  ...PageBState,
};

const reducers = {
  ...PageAReducer,
  ...PageBReducer,
};

function reducer(state = initStore, action) {
  console.log(action.type);
  const fn = reducers[action.type];
  if (fn) {
    return fn(state, action);
  } else {
    return state;
  }
}

const AppContext = createContext(null);

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initStore);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
