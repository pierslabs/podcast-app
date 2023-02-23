import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PodcastRouter from './router/PodcastRouter';
import { store } from './store/store';

const PodCastApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PodcastRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default PodCastApp;
