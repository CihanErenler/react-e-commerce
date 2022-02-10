import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const USerContext = React.createContext();

const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(false);
  const { user, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <USerContext.Provider value={{ myUser, loginWithRedirect, logout }}>
      {children}
    </USerContext.Provider>
  );
};

const useUSerContext = () => {
  return useContext(USerContext);
};

export { UserProvider, useUSerContext };
