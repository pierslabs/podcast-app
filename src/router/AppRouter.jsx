import { Route, Routes } from 'react-router-dom';
import PodcastRouter from '../podcast/router/PodcastRouter';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PodcastRouter />} />
    </Routes>
  );
};

export default AppRouter;
