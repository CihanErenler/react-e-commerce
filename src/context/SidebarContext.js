import React, { useContext, useReducer } from "react";
import reducer from "../reducers/sidebarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../common/reducerTypes";

const SidebarContext = React.createContext();

const currentState = {
  isSidebarOpen: false,
};

const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, currentState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export { SidebarProvider, useSidebarContext };
