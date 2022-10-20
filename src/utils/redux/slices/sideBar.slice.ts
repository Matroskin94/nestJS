import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../storeConfig";

interface ISideBarState {
  isOpened: boolean;
  sideBarType: string;
  isFetching: boolean;
}

const initialState: ISideBarState = {
  isOpened: false,
  sideBarType: '',
  isFetching: false,
};

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    setIsOpened: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    }
  }
});

export const sideBarActions = sideBarSlice.actions;

export const getIsSideBarOpen = (state: RootState) => state.sideBar.isOpened
export const getIsSideBarFetching = (state: RootState) => state.sideBar.isFetching
