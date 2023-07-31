import { useState } from "react";
import ClassBased from "./components/Demo/ClassBased";
import Todo from "./components/Todo/Todo";
import UserRef from "./components/Demo/UserRef";
import UseEffect from "./components/Demo/UseEffect";
import AuthContext from "./context/auth-context";
import UseContext from "./components/Demo/UseContext";
import Counter from "./components/Counter/Counter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>My Awesome App</h1>
      <hr />
      <Counter />
      {/* <UseEffect /> */}
      {/* <UserRef /> */}
      {/* <ClassBased /> */}
      {/* <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}> */}
      {/* <Todo />
        <UseContext />
         */}
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
