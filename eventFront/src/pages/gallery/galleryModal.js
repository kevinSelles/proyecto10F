import "./gallery.css";

export function getGalleryModal(galleryContainer) {
  const modal = document.createElement("div");
  modal.classList.add("gallery-modal");
  document.body.appendChild(modal);

  const images = galleryContainer.querySelectorAll("img");
  for (const img of images) {
    img.addEventListener("click", () => {
      modal.textContent = "";

      const modalImg = document.createElement("img");
      modalImg.src = img.src;
      modalImg.alt = img.alt;

      modal.appendChild(modalImg);
      modal.style.display = "flex";
    });
  }

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
};