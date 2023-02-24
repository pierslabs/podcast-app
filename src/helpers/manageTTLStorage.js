const { VITE_TTL_PODCAST } = import.meta.env;

export const setWithExpiryPodcastTTL = (key, value) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + VITE_TTL_PODCAST,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
