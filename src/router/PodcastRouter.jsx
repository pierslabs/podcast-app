import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, PodcastEpisode, PodcastDetail } from '../pages';

const PodcastRouter = () => {
  // TODO: Verify storage TTL

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<PodcastDetail />} />
      <Route path="/podcast/:podcastid/episode/:episodeid" element={<PodcastEpisode />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PodcastRouter;
