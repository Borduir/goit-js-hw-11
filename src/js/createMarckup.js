const createMarckup = imgList => {
  const gallery = document.querySelector('.gallery__ul');
  let marckup = '';
  for (let i = 0; i < imgList.length; i += 1) {
    marckup += ``;
    gallery.innerHTML = marckup;
  }
};
export default createMarckup;
