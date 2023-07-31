import { useState } from "react";
import ClassBased from "./components/Demo/ClassBased";
import Todo from "./components/Todo/Todo";
import UserRef from "./components/Demo/UserRef";
import UseEffect from "./components/Demo/UseEffect";
import AuthContext from "./context/auth-context";
import UseContext from "./components/Demo/UseContext";
import Counter from "./components/Counter/Counter";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header />
      <h1>My Awesome App</h1>
      <hr />

      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/effects" element={<UseEffect />} />
        <Route path="/context" element={<UseContext />} />
      </Routes>

      {/* <Counter /> */}
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
