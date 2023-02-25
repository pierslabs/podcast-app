import PodacstDetailItem from '../components/PodcastDetailItem';
import PodcastAudioPlayer from '../components/PodcastAudioPlayer';
import PodcastLayout from '../Layout/PodcastLayout';

const PodcastEpisode = () => {
  return (
    <PodcastLayout>
      <div className="conatiner p-10  flex flex-row justify-evenly">
        <PodacstDetailItem />
        <PodcastAudioPlayer />
      </div>
    </PodcastLayout>
  );
};

export default PodcastEpisode;
