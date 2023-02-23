import { createSlice } from '@reduxjs/toolkit';
export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    isLoadingPodcast: true,
    podcasts: [],
    activePodcast: null,
  },
  reducers: {
    onsetActivePodcast: (state, { payload }) => {
      state.activePodcast = payload;
    },

    onloadPodcasts: (state, { payload }) => {
      state.isLoadingPodcast = false;
      state.podcasts = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = podcastSlice.actions;
