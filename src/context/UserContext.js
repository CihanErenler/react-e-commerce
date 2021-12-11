import React, { useContext } from "react";

const USerContext = React.createContext();

const UserProvider = ({ children }) => {
  return <USerContext.Provider>{children}</USerContext.Provider>;
};

const useUSerContext = () => {
  return useContext(USerContext);
};

export { UserProvider, useUSerContext };
