import { createContext, useContext, useReducer, useEffect } from "react";
import { filterReducer, initialFilterState } from "../reducers";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const { Provider } = FilterContext;

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  const value = { filterState, filterDispatch };

  return <Provider value={value}>{children}</Provider>;
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
