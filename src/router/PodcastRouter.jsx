import { Navigate, Route, Routes } from 'react-router-dom';
import PodcastLayout from '../Layout/PodcastLayout';
import { Home, Podcast, PodcastDetail } from '../pages';

const PodcastRouter = () => {
  // TODO: Verify storage TTL

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<PodcastDetail />} />
      <Route path="/podcast/:podcastid/episode/:episodeid" element={<Podcast />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PodcastRouter;
