import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    addCounter(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    subtractCounter(state, action: PayloadAction<number>) {
      state.counter -= action.payload;
    },
  },
});

export const { increment, decrement, addCounter, subtractCounter } =
  counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
