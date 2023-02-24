import { useDispatch, useSelector } from 'react-redux';
import { podcastApi, podcastApiProxi } from '../api/podcastApi';
import { onloadPodcasts } from '../store/podcast/podcastSlice';
import { parse } from 'rss-to-json';

const { VITE_ITUNES_TOP_PODCAST_URC, VITE_ITUNES_DETAIL_PODCAST_URC } = import.meta.env;

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

  const startOnLoadingDetailPodcast = async (id) => {
    try {
      const { data } = await podcastApiProxi.get(`${VITE_ITUNES_DETAIL_PODCAST_URC}${id}`);
      const feedUrl = await data.results[0].feedUrl;

      return await parse(feedUrl);
    } catch (error) {
      if (error.response.status === 403) {
        const { data } = await podcastApi.get(`${VITE_ITUNES_DETAIL_PODCAST_URC}${id}`);
        const feedUrl = await data.results[0].feedUrl;

        return await parse(feedUrl);
      } else {
        const errors = { errorTrace: new Error(), errorMessasge: error.message };
        console.log(errors);
      }
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
    startOnLoadingDetailPodcast,
  };
};

export default usePodcatStore;
