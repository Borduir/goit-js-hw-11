const createMarckup = img => {
  const gallery = document.querySelector('.gallery__ul');
  let marckup = '';
  for (let i = 0; i < img.length; i += 1) {
    marckup += ``;
    gallery.innerHTML = marckup;
  }
};
export default createMarckup;
