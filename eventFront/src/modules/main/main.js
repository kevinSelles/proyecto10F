import "./main.css";

import { getHome } from "../../pages/home/home";
import { getGallery } from "../../pages/gallery/gallery";
import { getContact } from "../../pages/contact/contact";
import { getRegister } from "../../pages/register/register";
import { getLogin } from "../../pages/login/login";
import { getActivities } from "../../pages/activities/activities";
import { getCreateActivity } from "../../pages/create/createActivity";
import { getMyActivities } from "../../pages/myActivities/myActivities";

export function getMain() {

  const main = document.createElement("main");

  const sections = [
    { id: "homeSection", init: getHome },
    { id: "activitiesSection", init: getActivities },
    { id: "gallerySection", init: getGallery },
    { id: "contactSection", init: getContact },
    { id: "loginSection", init: getLogin },
    { id: "registerSection", init: getRegister },
    { id: "myActivitiesSection", init: getMyActivities },
    { id: "createSection", init: getCreateActivity }
  ];

  for (const sectionData of sections) {
    const section = document.createElement("section");
    section.id = sectionData.id;

    if (sectionData.id !== "homeSection") {
      section.style.display = "none";
    }

    sectionData.init(section);

    main.appendChild(section);
  }

  return main;
}