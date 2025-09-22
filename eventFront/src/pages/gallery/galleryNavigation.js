export function galleryNavigation(galleryContainer, modal, modalImg) {
  const images = Array.from(galleryContainer.querySelectorAll("img"));
  let currentIndex = 0;

  const prevBtn = document.createElement("span");
  prevBtn.textContent = "◀";
  prevBtn.classList.add("gallery-nav", "prev");

  const nextBtn = document.createElement("span");
  nextBtn.textContent = "▶";
  nextBtn.classList.add("gallery-nav", "next");

  modal.append(prevBtn, nextBtn);

  function showImage(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
    modalImg.alt = images[currentIndex].alt;
    modal.style.display = "flex";
  }

  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    showImage((currentIndex - 1 + images.length) % images.length);
  });

  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    showImage((currentIndex + 1) % images.length);
  });

  images.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
  });
}