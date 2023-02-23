import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Podcast, ChapterPodcastDetail } from '../pages';

const PodcastRouter = () => {
  // TODO: Verify storage TTL

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<Podcast />} />
      <Route path="/podcast/:podcastid/episode/:episodeid" element={<ChapterPodcastDetail />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PodcastRouter;
