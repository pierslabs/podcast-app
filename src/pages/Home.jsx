import InputFilter from '../components/InputFilter';
import PodcastItems from '../components/PodcastItems';
import PodcastLayout from '../Layout/PodcastLayout';

const Home = () => {
  return (
    <PodcastLayout>
      <InputFilter />
      <PodcastItems />
    </PodcastLayout>
  );
};

export default Home;
