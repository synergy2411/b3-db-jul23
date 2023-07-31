import { useEffect, useState } from "react";

const Output = () => {
  const [toggle, setToggle] = useState(false);

  const [users, setUsers] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setUsers(users);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>The test component</h1>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <p>toggle is true</p>}

      {!toggle && <p> toggle is false</p>}

      <hr />

      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Output;
