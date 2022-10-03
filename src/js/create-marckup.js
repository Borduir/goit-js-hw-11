let marckupTotal = '';
const gallery = document.querySelector('.gallery');
const createMarckup = (imgList, marckup, pageCount) => {
  if (pageCount === 1) {
    marckupTotal = '';
  }

  for (let i = 0; i < imgList.hits.length; i += 1) {
    const {
      // ${}
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
    } = imgList.hits[i];
    marckup += `<div class="photo-card">
  <img src="${webformatURL}" width = 250px height = 170px alt="photo" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes:</b> ${likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${views}
    </p>
    <p class="info-item">
      <b>Comments:</b> ${comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${downloads}
    </p>
  </div>
</div>`;
  }
  marckupTotal += marckup;
  gallery.innerHTML = marckupTotal;
  return marckup;
};
export default createMarckup;
