import "./home.css";

export function getHome(section) {

  const homeImg = document.createElement("img");
  homeImg.src = "/img/home.webp";
  homeImg.alt = "Portada promocional del evento";

  section.appendChild(homeImg);
}