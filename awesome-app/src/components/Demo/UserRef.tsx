import React, { useRef } from "react";

export default function UserRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <div className="container">
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Get Value</button>
    </div>
  );
}
