import "./header.css";

export function getHeader() {

  const header = document.createElement("header");

  const logo = document.createElement("img");
  logo.src = "/img/logo.webp";
  logo.classList.add("logo");

  header.appendChild(logo);

  return header;
};