import "./nav.css";

import { showSection } from "../../utils/showSections";

export function getNav() {

  const nav = document.createElement("nav");

  const navButtons = [
    {text: "Home", section: "homeSection"}, 
    {text: "Actividades", section: "activitiesSection"}, 
    {text: "Galería", section: "gallerySection"}, 
    {text: "Contacto", section: "contactSection"}
  ];

  for (const button of navButtons) {
    const btn = document.createElement("button");
    btn.textContent = button.text;
    btn.dataset.section = button.section;
    btn.addEventListener("click", () => showSection(button.section))
    nav.appendChild(btn);
  };

  return nav;
};