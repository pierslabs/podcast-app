import { configureStore } from '@reduxjs/toolkit';
import { podcastSlice } from './podcast/podcastSlice';

export const store = configureStore({
  reducer: {
    podcast: podcastSlice.reducer,
  },
});
