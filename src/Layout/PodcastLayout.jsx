import React from 'react';
import Header from '../components/Header';

const PodcastLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PodcastLayout;
