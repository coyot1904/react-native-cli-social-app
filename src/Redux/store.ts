import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Reducer/userSlice';
import postsReducer from './Reducer/postsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
