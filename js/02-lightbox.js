import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = galleryItems;
const ulGallery = document.querySelector("ul.gallery");
const markup = gallery
  .map(({ preview, original, description }) => {
    return `<a class="galery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`;
  })
  .join("");
ulGallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
lightbox.on("show.SimpleLightbox");
