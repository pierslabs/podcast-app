import { BounceLoader } from 'react-spinners';
import usePodcatStore from '../hooks/usePodcastStore';

const Header = () => {
  const { isLoadingPodcast } = usePodcatStore();

  return (
    <nav className="flex items-center justify-between flex-wrap  p-3 px-4 border-b-2 border-grey-500">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight text-blue-600">Podcaster</span>
      </div>
      <div>
        <BounceLoader
          color={'#34a3da'}
          loading={isLoadingPodcast}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </nav>
  );
};

export default Header;
