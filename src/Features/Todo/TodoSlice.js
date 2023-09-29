import { createSlice } from "@reduxjs/toolkit"
const  crudSlice = createSlice({
 name : "crud", 
 initialState: {
    users: [],
  }, 
reducers : {
    addUser(state, action) {
        state.users.push(action.payload);
      },
      updateUser(state, action) {
        const user = state.users.find(user => user.id === action.payload.id);
        user.name = action.payload.name;
      },
      deleteUser(state, action) {
        state.users = state.users.filter(user => user.id !== action.payload);
      },
}
})

export const {addUser , updateUser , deleteUser} = crudSlice.actions
export default crudSlice.reducer