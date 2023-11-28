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

let modal = basicLightbox.create('<img src="" width="800" height="600">', {
    onShow: modal => {
        window.addEventListener('keydown', onEscapeClick);
    },
    onClose: modal => {
        window.removeEventListener('keydown', onEscapeClick);
    }
});

gallery.addEventListener('click', event => {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG')
        return;

    modal.element().querySelector('img').src = event.target.dataset.source;
    modal.show();
});

function onEscapeClick(event) {
    if(event.code !== "Escape")
        return;
    modal.close();
}