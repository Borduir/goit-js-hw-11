// API KEY 30336513-f1d3dcf5d3b6560ebccde30e0

import fetchImages from './js/fetchimages';
import createMarckup from './js/createMarckup';

const searchForm = document.querySelector('.search-form');
const searchQuery = document.querySelector('[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');

let pageNumber = 1;
let pageCount = 1;
loadMoreBtn.style.display = 'none';
let maxPages = 1;

const searchParams = new URLSearchParams({
  key: '30336513-f1d3dcf5d3b6560ebccde30e0',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
});

//GET IMAGES LIST

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  pageNumber = 1;
  pageCount = 1;
  fetchImages(searchParams, pageNumber, searchQuery.value)
    .then(images => {
      maxPages = images.totalHits / images.hits.length;
      let marckup = '';
      createMarckup(images, marckup, pageCount);
    })
    .catch(error => console.log(error));
  loadMoreBtn.style.display = 'flex';
});

//LOAD MORE IMAGES

loadMoreBtn.addEventListener('click', () => {
  if (pageCount <= Math.ceil(maxPages) - 1) {
    pageCount += 1;
    pageNumber = pageCount;
  }
  fetchImages(searchParams, pageNumber, searchQuery.value)
    .then(images => {
      if (pageCount === Math.ceil(maxPages)) {
        loadMoreBtn.style.display = 'none';
      }
      console.log(pageCount, images.totalHits / images.hits.length);
      createMarckup(images, marckup, pageCount);
    })
    .catch(error => console.log(error));
});
