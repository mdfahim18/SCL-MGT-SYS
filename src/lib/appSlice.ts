import { createSlice } from '@reduxjs/toolkit';

type initialStateProps = {
  isSidebarOpen: boolean;
  isCollapsed: boolean;
};

const initialState: initialStateProps = {
  isSidebarOpen: false,
  isCollapsed: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },

    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },

    collapsed: (state) => {
      state.isCollapsed = true;
    },
    notCollapsed: (state) => {
      state.isCollapsed = false;
    },
  },
});

export const { openSidebar, closeSidebar, collapsed, notCollapsed } =
  appSlice.actions;
export default appSlice.reducer;
