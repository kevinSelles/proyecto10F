import "./gallery.css";
import { API } from "../../utils/API";
import { getGalleryModal } from "./galleryModal";

export async function getGallery(section) {

  const title = document.createElement("h2");
  title.textContent = "Alicante, Rota, Mallorca... Aquí tienes una muestra de lo bien que lo pasaron los participantes en otras ediciones";
  title.classList.add("gallery-title");
  section.appendChild(title);

  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery-grid");

  try {
    const images = await API({ endpoint: "/gallery" });

    if (images && images.length) {
      for (const img of images) {
        const imageElement = document.createElement("img");
        imageElement.src = img.secure_url;
        imageElement.alt = img.public_id;
        galleryContainer.appendChild(imageElement);
      }
    } else {
      const message = document.createElement("p");
      message.textContent = "No hay imágenes para mostrar.";
      galleryContainer.appendChild(message);
    }
  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error al cargar la galería.";
    galleryContainer.appendChild(errorMessage);
  };

  section.appendChild(galleryContainer);

  getGalleryModal(galleryContainer);
};