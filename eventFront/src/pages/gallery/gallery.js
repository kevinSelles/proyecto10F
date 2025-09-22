import "./gallery.css";
import { API } from "../../utils/API";
import { getGalleryModal } from "./galleryModal";

export async function getGallery(section) {

  const title = document.createElement("h2");
  title.textContent = "Alicante, Rota, Mallorca... Aquí tienes una muestra de lo bien que lo pasaron los participantes en otras ediciones";
  title.classList.add("gallery-title");

  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery-grid");

  try {
    const images = await API({ endpoint: "/gallery" });

      for (const img of images) {
        const imageElement = document.createElement("img");
        imageElement.src = img.secure_url;
        imageElement.alt = img.public_id;
        galleryContainer.appendChild(imageElement);
      };

  } catch (error) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error al cargar la galería.";
    galleryContainer.appendChild(errorMessage);
  };

  section.append(title, galleryContainer);

  getGalleryModal(galleryContainer);
};