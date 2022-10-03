const fetchImages = async (parameters, page, query) => {
  parameters.set('page', page);
  parameters.set('q', query.replace(' ', '+'));
  const response = await fetch(
    `https://pixabay.com/api/?${parameters.toString()}`
  );
  const images = await response.json();
  return images;
};
export default fetchImages;
