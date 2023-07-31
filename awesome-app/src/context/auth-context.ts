import React, { Dispatch, SetStateAction } from "react";

const AuthContext = React.createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default AuthContext;
