import { useState, createContext } from "react";

//as the actually value you want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//This provider is the actual component and allows to access the state of the current user
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  //Pass it to the components through children and send the value of state
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
