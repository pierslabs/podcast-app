import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PodcastRouter from './router/PodcastRouter';

const PodCastApp = () => {
  return (
    <BrowserRouter>
      <PodcastRouter />
    </BrowserRouter>
  );
};

export default PodCastApp;
