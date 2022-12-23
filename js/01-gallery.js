import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallDiv = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, {preview,original,description}) => acc + 
`<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`,'');
gallDiv.insertAdjacentHTML('beforeend',markup);
gallDiv.addEventListener('click', onClick);

function onClick(evt){
evt.preventDefault();

if(evt.target.classList.contains('gallery__image')){
const sourceImg = evt.target.dataset.source;
const instance = basicLightbox.create(`<div class="modal">
<img src="${sourceImg}" width="800" height="600"></img></div>`,
{onShow: instance => {document.addEventListener('keydown',downEscape)},
onClose: instance => {document.removeEventListener('keydown',downEscape)},});
instance.show();
function downEscape (evt){ 
    if(evt.code === 'Escape'){
        instance.close();
    } 
}

}
}

