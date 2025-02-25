import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState, initialState} from '../../Types/User';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearUser: state => {
      state.username = '';
      state.email = '';
      state.password = '';
    },
  },
});

export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
