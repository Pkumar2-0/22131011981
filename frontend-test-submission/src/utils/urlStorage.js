const STORAGE_KEY = "shortened_urls";
export const getUrls = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
export const saveUrl = (shortcode, data) => {
  const urls = getUrls();
  urls[shortcode] = data;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));
};
export const getUrl = (shortcode) => {
  const urls = getUrls();
  return urls[shortcode];
};