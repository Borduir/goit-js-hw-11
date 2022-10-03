'use strict';

//IMPORTS AND REFS

import fetchImages from './js/fetch-images';
import createMarckup from './js/create-marckup';
import createGalleryStyles from './js/gallery-styles';
const searchForm = document.querySelector('.search-form');
const searchQuery = document.querySelector('[name="searchQuery"]');
const loadMoreBtn = document.querySelector('.load-more');
const galleryBox = document.querySelector('.gallery');
const searchFormBox = document.querySelector('.page-header');

// GLOBAL STYLES

galleryBox.style.display = 'flex';
galleryBox.style.flexWrap = 'wrap';
galleryBox.style.margin = '0 10vh';
searchFormBox.style.backgroundColor = '#3480eb';
searchFormBox.style.display = 'flex';
searchFormBox.style.justifyContent = 'center';
searchFormBox.style.padding = '5px';
loadMoreBtn.style.margin = '10px auto';
loadMoreBtn.style.display = 'none';

//GLOBAL VARIABLES

let pageNumber = 1;
let pageCount = 1;
let maxPages = 1;
let marckup = '';

//UNCHANGEABLE SEARCH PARAMETERS

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
      if (images.totalHits !== 0) {
        maxPages = images.totalHits / images.hits.length;
        marckup = '';
        createMarckup(images, marckup, pageCount);
        createGalleryStyles();
        loadMoreBtn.style.display = 'flex';
      } else {
        loadMoreBtn.style.display = 'none';
        alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    })
    .catch(error => alert(error));
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
        alert("We're sorry, but you've reached the end of search results.");
      }
      createMarckup(images, marckup, pageCount);
      createGalleryStyles();
    })
    .catch(error => alert(error));
});
