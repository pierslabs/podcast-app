import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import usePodcatStore from '../../hooks/usePodcastStore';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { onSetActivePodcastChapter, onSetIsLoading } from '../../store/podcast/podcastSlice';

const PodcastTableDeatilItem = () => {
  const dispatch = useDispatch();
  const [podcastChapters, setPodcastChapters] = useState({ chapters: [], count: 0 });
  const { activePodcast, startOnLoadingDetailPodcast } = usePodcatStore();
  const [errors, setErrors] = useState(false);

  const getPodcastChapters = async () => {
    try {
      const podcastId = activePodcast?.id.attributes['im:id'];
      const getPodCastChapters = await startOnLoadingDetailPodcast(podcastId);

      setPodcastChapters({
        chapters: getPodCastChapters.items,
        count: getPodCastChapters.items.length,
      });
      dispatch(onSetIsLoading(false));
    } catch (error) {
      setErrors(error);
      dispatch(onSetIsLoading(false));
    }
  };

  useEffect(() => {
    dispatch(onSetIsLoading(true));
    getPodcastChapters();
  }, []);

  return (
    <div className="rounded p-5 w-2/4">
      <div className="bg-white border  border-gray-200 mb-5  p-4 shadow-lg font-bold text-xl text-gray-800">
        Episodes: <span className="text-gray-00">{podcastChapters.count}</span>
      </div>

      <div className="border border-gray-200 p-3 shadow-xl ">
        <table className="w-full">
          <thead>
            <tr className="border-b-2">
              <th className="w-4/5 text-left py-3 px-4 uppercase font-semibold text-sm">Title</th>
              <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
              <th className="  w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">Duration</th>
            </tr>
          </thead>
          <tbody>
            {podcastChapters &&
              podcastChapters.chapters.map((chapter) => (
                <tr key={chapter.id} className="text-gray-700  border-b hover:bg-slate-100 transition-all">
                  <td
                    className="w-1/3 text-left py-3 px-4 text-blue-500"
                    onClick={() =>
                      dispatch(
                        onSetActivePodcastChapter({
                          title: chapter.title,
                          description: chapter.description,
                          audio: chapter.enclosures[0].url,
                        })
                      )
                    }
                  >
                    <Link to={`/podcast/:podcastid/episode/${chapter.id}`}>{chapter.title}</Link>
                  </td>
                  <td className="w-1/3 text-left py-3 px-4">{moment(chapter.itunnes_published).format('D/M/YYYY')}</td>
                  <td className="text-left py-3 px-4">{chapter.itunes_duration}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {errors ? (
        <h2 className="text-red-600 text-xl text-center mt-10">There was an error checking the console.</h2>
      ) : null}
    </div>
  );
};

export default PodcastTableDeatilItem;
