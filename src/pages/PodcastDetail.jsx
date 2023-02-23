import { Navigate } from 'react-router-dom';
import PodacstDetailItem from '../components/PodacstDetailItem';
import usePodcatStore from '../hooks/usePodcastStore';
import PodcastLayout from '../Layout/PodcastLayout';

const PodcastDetail = () => {
  const { activePodcast } = usePodcatStore();

  if (!activePodcast) return <Navigate to="/" />;

  return (
    <PodcastLayout>
      <div className="conatiner p-10 border flex flex-row justify-between ">
        <PodacstDetailItem />
        <div>kjljk</div>
      </div>
    </PodcastLayout>
  );
};

export default PodcastDetail;
