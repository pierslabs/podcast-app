import { Header } from '../components';

const PodcastLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PodcastLayout;
