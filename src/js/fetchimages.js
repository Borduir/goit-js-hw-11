const fetchImages = async (parameters, page, query) => {
  page += 1;
  console.log(query);
  parameters.set('page', page);
  parameters.set('q', query.replace(' ', '+'));
  console.log(parameters.toString());
  const response = await fetch(
    `https://pixabay.com/api/?${parameters.toString()}`
  );
  const images = await response.json();
  return images;
};
export default fetchImages;
