// Npm imports
import { configureStore } from '@reduxjs/toolkit';
// Reducer imports
import themeReducers from './themeSlice';
import fileOrderReducers from './fileOrderSlice';

export const store = configureStore({
  reducer: {
      theme: themeReducers,
      fileOrder: fileOrderReducers,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch