const createGalleryStyles = () => {
  const galleryCards = document.querySelectorAll('.photo-card');
  for (card of galleryCards) {
    card.style.border = '2px solid black';
    card.style.margin = '20px 10px 10px 0';
    card.style.color = 'tomato';
  }
};
export default createGalleryStyles;
