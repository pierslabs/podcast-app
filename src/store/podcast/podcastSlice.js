import { createSlice } from '@reduxjs/toolkit';
export const podcastSlice = createSlice({
  name: 'podcast',
  initialState: {
    isLoadingPodcast: true,
    podcasts: [],
    filterPodcast: [],
    activePodcast: null,
    activePodcastChapter: null,
    podcastMessager: null,
  },
  reducers: {
    onSetIsLoading: (state, { payload }) => {
      state.isLoadingPodcast = payload;
    },
    onSetActivePodcast: (state, { payload }) => {
      state.activePodcast = payload;
    },

    onSetActivePodcastChapter: (state, { payload }) => {
      state.activePodcastChapter = payload;
    },

    onloadPodcasts: (state, { payload }) => {
      state.isLoadingPodcast = false;
      state.podcasts = payload;
    },

    onFilterPodcast: (state, { payload }) => {
      state.filterPodcast =
        state.podcasts.filter(
          (podcast) =>
            String(podcast['im:name'].label.toLowerCase()).startsWith(payload.toLowerCase()) ||
            String(podcast['im:artist'].label.toLowerCase()).startsWith(payload.toLowerCase())
        ) || [];

      if (payload.length > 0 && state.filterPodcast.length === 0) {
        state.podcastMessager = 'We havent found any podcasts.';
      } else {
        state.podcastMessager = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActivePodcast, onloadPodcasts, onFilterPodcast, onSetIsLoading, onSetActivePodcastChapter } =
  podcastSlice.actions;
