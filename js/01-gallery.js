import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
            </li>`;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

let modal = null;
gallery.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG')
        return;

    modal = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `);
    modal.show();
    document.addEventListener('keydown', onEscapeClick);
});

function onEscapeClick(event) {
    if(event.code !== "Escape")
        return;

    modal.close();
    document.removeEventListener('keydown', onEscapeClick);
}