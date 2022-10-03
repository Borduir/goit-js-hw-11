let marckupTotal = '';
const gallery = document.querySelector('.gallery');
const createMarckup = (imgList, marckup, pageCount) => {
  if (pageCount === 1) {
    marckupTotal = '';
  }
  for (let i = 0; i < imgList.hits.length; i += 1) {
    marckup += `1`;
  }
  marckupTotal += marckup;
  gallery.innerHTML = marckupTotal;
  return marckup;
};
export default createMarckup;
