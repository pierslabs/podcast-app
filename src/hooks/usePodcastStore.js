import { useDispatch, useSelector } from 'react-redux';
import { podcastApi, podcastApiProxi } from '../api/podcastApi';
import { onloadPodcasts } from '../store/podcast/podcastSlice';
import { parse } from 'rss-to-json';

const { VITE_ITUNES_TOP_PODCAST_URC, VITE_ITUNES_DETAIL_PODCAST_URC } = import.meta.env;

const usePodcatStore = () => {
  const dispatch = useDispatch();
  const { podcasts, isLoadingPodcast, filterPodcast, podcastMessager, activePodcast, activePodcastChapter } =
    useSelector((state) => state.podcast);

  const startOnLoadingPodcast = async () => {
    const podcastTop100 = localStorage.getItem('podacasttop100');

    if (!podcastTop100) {
      console.log('entra');
      try {
        const { data } = await podcastApi.get(VITE_ITUNES_TOP_PODCAST_URC);
        localStorage.setItem('podacasttop100', JSON.stringify(data.feed.entry));
        dispatch(onloadPodcasts(data.feed.entry));
      } catch (error) {
        const errors = { errorTrace: new Error(), errorMessasge: error.message };
        console.log(errors);
      }
    } else {
      const podcastTop100JSON = JSON.parse(podcastTop100);

      dispatch(onloadPodcasts(podcastTop100JSON));
    }
  };

  const startOnLoadingDetailPodcast = async (id) => {
    const podcastItem = localStorage.getItem(id);

    if (!podcastItem) {
      try {
        const { data } = await podcastApiProxi.get(`${VITE_ITUNES_DETAIL_PODCAST_URC}${id}`);
        const idCollection = data.results[0].collectionId;
        const feedUrl = await data.results[0].feedUrl;
        const podcastsCollection = await parse(feedUrl);
        localStorage.setItem(idCollection, JSON.stringify(podcastsCollection));
        return podcastsCollection;
      } catch (error) {
        if (error.response.status === 403) {
          const { data } = await podcastApi.get(`${VITE_ITUNES_DETAIL_PODCAST_URC}${id}`);
          const feedUrl = await data.results[0].feedUrl;
          const podcastsCollection = await parse(feedUrl);
          localStorage.setItem(idCollection, JSON.stringify(podcastsCollection));
          return podcastsCollection;
        } else {
          const errors = { errorTrace: new Error(), errorMessasge: error.message };
          console.log(errors);
        }
      }
    } else {
      return JSON.parse(podcastItem);
    }
  };

  return {
    //Properties
    podcasts,
    isLoadingPodcast,
    filterPodcast,
    podcastMessager,
    activePodcast,
    activePodcastChapter,

    //Methods
    startOnLoadingPodcast,
    startOnLoadingDetailPodcast,
  };
};

export default usePodcatStore;
