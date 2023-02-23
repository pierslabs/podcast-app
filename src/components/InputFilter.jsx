import { useState } from 'react';
import { useDispatch } from 'react-redux';
import usePodcatStore from '../hooks/usePodcastStore';
import { onFilterPodcast } from '../store/podcast/podcastSlice';

const InputFilter = () => {
  const dispatch = useDispatch();
  const { filterPodcast } = usePodcatStore();
  const podcastCounter = filterPodcast.length > 0 ? filterPodcast.length : 100;
  return (
    <div className="flex mt-3 ">
      <div className="ml-auto flex flex-row px-10 min-w-24">
        <button disabled className="text-white w-20 rounded bg-blue-500 mr-2 ">
          {podcastCounter}
        </button>
        <input
          className="shadow  border rounded  py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline focus:border-blue-300"
          id="username"
          type="text"
          onChange={(e) => {
            dispatch(onFilterPodcast(e.target.value));
          }}
          placeholder="Find a podcast ..."
        />
      </div>
    </div>
  );
};

export default InputFilter;
