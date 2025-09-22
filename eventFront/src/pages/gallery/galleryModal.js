import "./gallery.css";
import { galleryNavigation } from "./galleryNavigation";

export function getGalleryModal(galleryContainer) {
  const modal = document.createElement("div");
  modal.classList.add("gallery-modal");
  document.body.appendChild(modal);

  const divImg = document.createElement("div");
  divImg.classList.add("gallery-img-div");
  modal.appendChild(divImg);

  const modalImg = document.createElement("img");
  modal.appendChild(modalImg);

  galleryNavigation(galleryContainer, modal, modalImg);

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
};