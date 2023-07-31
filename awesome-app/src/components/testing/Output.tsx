import { useState } from "react";

const Output = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>The test component</h1>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <p>toggle is true</p>}

      {!toggle && <p> toggle is false</p>}
    </div>
  );
};

export default Output;
