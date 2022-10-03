// API KEY 30336513-f1d3dcf5d3b6560ebccde30e0

import fetchImages from './js/fetchimages';
import createMarckup from './js/createMarckup';

const searchForm = document.querySelector('.search-form');
const searchQuery = document.querySelector('[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');

let pageNumber = 0;

const searchParams = new URLSearchParams({
  key: '30336513-f1d3dcf5d3b6560ebccde30e0',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
});

//GET IMAGES LIST

loadMoreBtn.style.display = 'none';
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  fetchImages(searchParams, pageNumber, searchQuery.value)
    .then(images => createMarckup(images))
    .catch(error => console.log(error));
  loadMoreBtn.style.display = 'flex';
});

//LOAD MORE IMAGES

loadMoreBtn.addEventListener('click', () => {
  pageNumber += 1;
  fetchImages(searchParams, pageNumber, searchQuery.value)
    .then(images => createMarckup(images))
    .catch(error => console.log(error));
});
