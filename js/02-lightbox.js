import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryHtml = document.querySelector('.gallery');


const markup = galleryItems.reduce((acc, {preview,original,description}) => acc + 
`<li>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title=""/>
</a>
</li>`,'');

galleryHtml.insertAdjacentHTML('beforeend',markup);


// const altName = document.querySelector('.gallery__image');
// console.dir(altName)
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay:250,
    captionPosition: 'bottom',
});






