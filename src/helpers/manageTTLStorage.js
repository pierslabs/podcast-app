const { VITE_TTL_PODCAST } = import.meta.env;

export const setWithExpiryPodcastTTL = (key, value) => {
  const now = new Date();
  const podcastTTL = +VITE_TTL_PODCAST;
  const item = {
    value: value,
    expiry: now.getTime() + podcastTTL,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getWithExpiryPodcastTTL = (key) => {
  const itemStr = localStorage.getItem(key);
  const item = JSON.parse(itemStr);
  const now = new Date();

  const expiryPodcastValue = +item?.expiry;

  if (now.getTime() > expiryPodcastValue) {
    localStorage.removeItem(key);
    return true;
  }
  return false;
};
