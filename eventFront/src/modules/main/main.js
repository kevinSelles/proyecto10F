import "./main.css";

import { getHome } from "../../pages/home/home";
import { getGallery } from "../../pages/gallery/gallery";
import { getContact } from "../../pages/contact/contact";
import { getRegister } from "../../pages/register/register";
import { getLogin } from "../../pages/login/login";
import { getActivities } from "../../pages/activities/activities";
import { getCreateActivity } from "../../pages/create/createActivity";

export function getMain() {

  const main = document.createElement("main");

  const sectionIds = [
    "homeSection",
    "activitiesSection",
    "gallerySection",
    "contactSection",
    "loginSection",
    "registerSection",
    "myActivitiesSection",
    "createSection"
  ];

  for (const id of sectionIds) {
    const section = document.createElement("section");
    section.id = id;

    if (id !== "homeSection") {
      section.style.display = "none";
    } else {
      getHome(section);
    };

    if (id === "gallerySection") {
      getGallery(section);
    };

    if (id === "contactSection") {
      getContact(section);
    };

    if (id === "registerSection") {
      getRegister(section);
    };

    if (id === "loginSection") {
      getLogin(section);
    };

    if (id === "activitiesSection") {
      getActivities(section);
    }

     if (id === "createSection") {
      getCreateActivity(section);
    }

    main.appendChild(section);
  }

  return main;
}