import { InputFilter, PodcastItems } from '../components';
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
