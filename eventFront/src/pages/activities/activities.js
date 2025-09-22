import "./activities.css";
import { API } from "../../utils/API";
import { createActivityCard } from "./createActivityCard";
import { createUserButtons } from "./CreateUserButtons.js";
import { createAdminButtons } from "./createAdminButtons.js";

export async function getActivities(section, onlyUserActivities = false) {
  section.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Actividades del evento";
  title.classList.add("activities-title");

  const divActivities = document.createElement("div");
  divActivities.classList.add("activities-container");

  section.append(title, divActivities);

  let user = null;
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser?._id) {
    user = await API({ endpoint: `/users/${storedUser._id}`, method: "GET" });
  };

  let activities = await API({ endpoint: "/activities" });

  if (onlyUserActivities && user?._id) {
    activities = activities.filter(act => act.users?.some(u => u._id === user._id));
  };

  for (const act of activities) {
  const { article, divButtons } = createActivityCard(act);

  if (user?.rol === "admin") {
    const adminButtons = createAdminButtons(act);
    divButtons.append(...adminButtons);
  } else if (user?.rol === "user") {
      const userButtons = createUserButtons(act, user, section);
      divButtons.appendChild(userButtons);
    };
    divActivities.appendChild(article);
  }
};