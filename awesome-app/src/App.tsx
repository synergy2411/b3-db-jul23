import { useState } from "react";
import ClassBased from "./components/Demo/ClassBased";
import Todo from "./components/Todo/Todo";
import UserRef from "./components/Demo/UserRef";
import UseEffect from "./components/Demo/UseEffect";

function App() {
  console.log("App");

  return (
    <div>
      <h1>My Awesome App</h1>
      <hr />
      <UseEffect />
      {/* <UserRef /> */}
      {/* <ClassBased /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
