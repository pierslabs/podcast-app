import React, { useEffect } from 'react';
import usePodcatStore from '../hooks/usePodcastStore';

const PodcastItems = () => {
  const { startOnLoadingPodcast, podcasts } = usePodcatStore();

  useEffect(() => {
    startOnLoadingPodcast();
  }, []);

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 p-5  xl:grid-cols-4 sm:grid-cols-2 lg:mx-20 ">
      {podcasts.map((podcast, index) => (
        <div key={podcast?.id.attributes['im:id']} className="max-w-none ">
          <img
            className="rounded-full  border-t-2 border-l-2 border-r-2 p-0.1 border-blue-200 mx-auto relative top-20"
            src={podcast['im:image'][2].label}
            alt="img"
          />

          <div className="p-5  border shadow-xl text-center pt-20 min-w-xl h-52 hover:bg-slate-100 ease-in duration-200 ">
            <a href="#">
              <h5 className="mb-2 font-bold tracking-tight text-gray-700 dark:text-white">
                {podcast['im:name'].label}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{podcast['im:artist'].label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastItems;
