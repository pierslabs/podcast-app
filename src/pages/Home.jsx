import { useEffect } from 'react';
import usePodcatStore from '../hooks/usePodcastStore';
import PodcastLayout from '../Layout/PodcastLayout';

const Home = () => {
  const { startOnLoadingPodcast, podcasts } = usePodcatStore();

  useEffect(() => {
    startOnLoadingPodcast();
  }, []);

  return (
    <PodcastLayout>
      <div>home</div>
    </PodcastLayout>
  );
};

export default Home;
