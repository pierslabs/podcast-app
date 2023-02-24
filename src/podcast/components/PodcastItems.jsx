import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import usePodcatStore from '../../hooks/usePodcastStore';
import { onSetActivePodcast } from '../../store/podcast/podcastSlice';

const PodcastItems = () => {
  const dispatch = useDispatch();
  const { startOnLoadingPodcast, podcasts, filterPodcast, podcastMessager } = usePodcatStore();

  useEffect(() => {
    startOnLoadingPodcast();
  }, []);

  const podcastListData = filterPodcast.length <= 0 ? podcasts : filterPodcast;

  if (podcastMessager) return <h2 className="text-center mt-40 text-2xl text-slate-700">{podcastMessager}</h2>;

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-5  xl:grid-cols-4 sm:grid-cols-2 lg:mx-20 -mt-10">
      {podcastListData &&
        podcastListData.map((podcast) => (
          <div key={podcast?.id.attributes['im:id']} className="max-w-none ">
            <img
              className="rounded-full  border-t-2 border-l-2 border-r-2 p-0.1 border-blue-200 mx-auto relative top-20"
              src={podcast['im:image'][2].label}
              alt="img"
            />

            <div className="p-5  border shadow-xl text-center pt-20 min-w-xl h-52 hover:bg-slate-100 ease-in duration-200 ">
              <Link
                onClick={() => dispatch(onSetActivePodcast(podcast))}
                to={`/podcast/${podcastListData[0].id.attributes['im:id']}`}
              >
                <h5 className="mb-2 font-bold tracking-tight text-gray-700 dark:text-white">
                  {podcast['im:name'].label}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{podcast['im:artist'].label}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PodcastItems;
