import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { sideBarSlice } from "./slices/sideBar.slice";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      sideBar: sideBarSlice.reducer,
    },
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const reduxWrapper = createWrapper<AppStore>(makeStore);
