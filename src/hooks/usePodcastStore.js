import { useDispatch, useSelector } from 'react-redux';
import podcastApi from '../api/podcastApi';
import { onloadPodcasts } from '../store/podcast/podcastSlice';

const { VITE_ITUNES_TOP_PODCAST_URC } = import.meta.env;

const usePodcatStore = () => {
  const dispatch = useDispatch();
  const { podcasts, isLoadingPodcast, filterPodcast, podcastMessager, activePodcast } = useSelector(
    (state) => state.podcast
  );

  const startOnLoadingPodcast = async () => {
    try {
      const { data } = await podcastApi.get(VITE_ITUNES_TOP_PODCAST_URC);
      dispatch(onloadPodcasts(data.feed.entry));
    } catch (error) {
      const errors = { errorTrace: new Error(), errorMessasge: error.message };
      console.log(errors);
    }
  };

  return {
    //Properties
    podcasts,
    isLoadingPodcast,
    filterPodcast,
    podcastMessager,
    activePodcast,

    //Methods
    startOnLoadingPodcast,
  };
};

export default usePodcatStore;
