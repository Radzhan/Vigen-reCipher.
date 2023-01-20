import {configureStore} from "@reduxjs/toolkit";
import { ViginerReducer } from "../store/viginer";

export const store = configureStore({
  reducer: {
    viginer: ViginerReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;