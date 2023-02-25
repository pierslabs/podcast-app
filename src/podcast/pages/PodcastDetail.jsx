import PodacstDetailItem from '../components/PodcastDetailItem';
import PodcastTableDeatilItem from '../components/PodcastTableDeatilItem';
import PodcastLayout from '../Layout/PodcastLayout';

const PodcastDetail = () => {
  return (
    <PodcastLayout>
      <div className="conatiner p-10  flex flex-row justify-evenly">
        <PodacstDetailItem />
        <PodcastTableDeatilItem />
      </div>
    </PodcastLayout>
  );
};

export default PodcastDetail;
