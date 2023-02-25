import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import usePodcatStore from '../../hooks/usePodcastStore';

const PodacstDetailItem = () => {
  const { activePodcast } = usePodcatStore();
  const podcastId = activePodcast?.id.attributes['im:id'];

  if (!activePodcast) return <Navigate to="/" />;

  return (
    <div className="border p-6 flex flex-col shadow-xl h-2/5 w-1/4 mt-5">
      <Link to={`/podcast/${podcastId}`}>
        <div className="mb-2 p-2">
          <img className="w-64 mx-auto mb-3 rounded" src={activePodcast['im:image'][2].label} alt="Avatar of Writer" />
        </div>

        <div className="mb-2 border-b-2 border-t-2  border-grey-300 p-3">
          <div className="text-gray-900 font-semibold text mb-2">{activePodcast.title.label}</div>
          <p className=" text-slate-700">by {activePodcast['im:artist'].label}</p>
        </div>
      </Link>

      <div className="border-grey-300  px-3">
        <div className="text-gray-600 font-semibold text mb-2">Description:</div>
        <p className="text-gray-600">{activePodcast.summary.label}</p>
      </div>
    </div>
  );
};

export default PodacstDetailItem;
