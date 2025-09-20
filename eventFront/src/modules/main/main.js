import { getHome } from "../home/home";
import "./main.css";

export function getMain() {

  const main = document.createElement("main");

  const sectionIds = [
    "homeSection",
    "activitiesSection",
    "gallerySection",
    "contactSection",
    "loginSection",
    "registerSection",
    "myActivitiesSection"
  ];

  for (const id of sectionIds) {
    const section = document.createElement("section");
    section.id = id;

    if (id !== "homeSection") {
      section.style.display = "none";
    } else {
      getHome(section);
    }

    main.appendChild(section);
  }

  return main;
}