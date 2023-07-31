import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     console.log("[Use Effect Callback]");
  //   }, []);

  //   useEffect(() => {
  //     console.log("[Use Effect Callback]");
  //   }, [show]);

  useEffect(() => {
    console.log("[Use Effect Callback]");
    return () => {
      console.log("[Clean Up]");
    };
  }, [show]);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show
      </button>
      {toggle && <p>Some content!!</p>}
      {show && <p>Showing content!!</p>}
    </div>
  );
}
