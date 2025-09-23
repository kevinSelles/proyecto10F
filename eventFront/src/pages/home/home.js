import "./home.css";

export function getHome(section) {
  const homeImg = document.createElement("img");
  homeImg.alt = "Portada promocional del evento";

  if (window.innerWidth < 1000) {
    homeImg.src = "/img/home-movil.webp";
  } else {
    homeImg.src = "/img/home.webp";
  }

  const title = document.createElement("h2");
  title.classList.add("home-title");
  title.textContent = "¡Reserva ahora y no te quedes sin sitio!";

  const text = document.createElement("h3");
  text.classList.add("bottom-text");
  text.textContent = "Con la colaboración del Ayuntamiento de Cádiz";

  section.appendChild(title);
  section.appendChild(homeImg);
  section.appendChild(text);
}