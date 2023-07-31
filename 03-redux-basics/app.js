const { createStore } = require("redux");

const initialState = {
  counter: 0,
};

// REDUCER
function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    // state.counter++;                // NEVER EVER DO THAT
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}

// STORE

const store = createStore(reducer);

// SUBSCRIBE
store.subscribe(() => {
  console.log(store.getState());
});

// ACTION
store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "DECREMENT" });
