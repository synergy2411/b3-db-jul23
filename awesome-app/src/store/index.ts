import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.slice";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
  },
});

export type IAppState = ReturnType<typeof store.getState>;

export default store;
