import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

export default function UseContext() {
  const context = useContext(AuthContext);

  return (
    <div>
      <h1>Context Demo Component</h1>
      <h3>User is {context.isLoggedIn ? "" : "NOT "} logged in!</h3>
      <button
        className="btn btn-primary"
        onClick={() => context.setIsLoggedIn(!context.isLoggedIn)}
      >
        {context.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
