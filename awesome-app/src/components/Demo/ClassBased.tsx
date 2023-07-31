import React from "react";

interface IProps {}

interface IUser {
  name: string;
  email: string;
}

interface IState {
  counter: number;
  users: IUser[];
}

class ClassBased extends React.Component<IProps, IState> {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      counter: 0,
      users: [],
    };
    console.log("Constructor");
  }

  componentDidMount(): void {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users,
        });
      })
      .catch(console.error);
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<IProps>,
    nextState: Readonly<IState>,
    nextContext: any
  ): boolean {
    console.log("shouldComponentUpdate");
    return true; // CAN ALSO MANAGE TO RE-RENDER THE COMPONENT
  }

  render(): React.ReactNode {
    console.log("Render");
    return (
      <div className="container">
        <h1>The class based component</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          {this.state.counter}
        </button>
        <hr />
        <ul>
          {this.state.users.map((user) => (
            <li key={user.name}>
              {" "}
              {user.name.toUpperCase()} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassBased;
