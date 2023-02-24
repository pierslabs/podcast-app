import { Navigate } from 'react-router-dom';
import usePodcatStore from '../../hooks/usePodcastStore';

const PodcastAudioPlayer = () => {
  const { activePodcastChapter } = usePodcatStore();
  if (!activePodcastChapter) return <Navigate to="/" />;

  const { title, description, audio } = activePodcastChapter;

  return (
    <div className="w-2/4 rounded overflow-hidden  h-2/3 p-2 shadow-2xl border mt-5">
      <div className="px-6 py-4 border-b-2">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} className="p-4 border-b-2" />
      <div className="px-6 pt-4 pb-2">
        <audio controls className="w-full border-blue-300 border-4 rounded-full">
          <source src={audio} type="audio/mp3" />
          <source src={audio} type="audio/ogg" />
          <source src={audio} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default PodcastAudioPlayer;
