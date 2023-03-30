import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map((item) => {
    return `
    <a class="gallery__item" href="${item.original}">
    <img 
    class="gallery__image" 
    src="${item.preview}" 
    alt="${item.description}" 
    />
  </a>`;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
