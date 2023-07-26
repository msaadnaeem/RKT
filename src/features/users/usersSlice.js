import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersDB: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.usersDB.push(action.payload);
    },
    deleteUser: (state, action) => {
          state.usersDB = state.usersDB.filter((user) => user.id!== action.payload);
        },
  },
});



export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;