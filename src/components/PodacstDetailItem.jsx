import React from 'react';
import { Navigate } from 'react-router-dom';
import usePodcatStore from '../hooks/usePodcastStore';

const PodacstDetailItem = () => {
  const { activePodcast } = usePodcatStore();

  if (!activePodcast) return <Navigate to="/" />;
  return (
    <div className="border p-5 w-1/3 flex flex-col items-center shadow-xl h-2/5">
      <div className="mb-2">
        <img className="w-64 mx-auto mb-3 rounded" src={activePodcast['im:image'][2].label} alt="Avatar of Writer" />
      </div>

      <div className="mb-2 border-b-2 border-t-2  border-grey-300 p-2">
        <label></label>
        <div className="text-gray-900 font-semibold text mb-2">{activePodcast.title.label}</div>
        <p className=" text-slate-800">by {activePodcast['im:artist'].label}</p>
      </div>

      <div className="flex items-center">
        <div className="text-sm">
          <p className=" font-semibold text-slate-700">Description</p>
          <p className="text-gray-600">{activePodcast.summary.label}</p>
        </div>
      </div>
    </div>
  );
};

export default PodacstDetailItem;
