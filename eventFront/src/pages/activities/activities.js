import "./activities.css";

import { API } from "../../utils/API";
import { openEditForm } from "../create/editActivity";
import { deleteActivity } from "../create/deleteActivity";

export async function getActivities(section) {
  section.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Actividades del evento";
  title.classList.add("activities-title");

  const divActivities = document.createElement("div");
  divActivities.classList.add("activities-container");

  section.appendChild(title);
  section.appendChild(divActivities);

  let user = null;
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser?._id) {
    user = await API({ endpoint: `/users/${storedUser._id}`, method: "GET" });
  }

  const activities = await API({ endpoint: "/activities" });

  if (!activities || activities.length === 0) {
    const noActivities = document.createElement("p");
    noActivities.textContent = "No hay actividades disponibles por el momento.";
    section.appendChild(noActivities);
    return;
  }

  for (const act of activities) {
    const article = document.createElement("article");
    article.classList.add("activity-card");
    article.dataset.id = act._id;

    const h3 = document.createElement("h3");
    h3.textContent = act.title;

    const img = document.createElement("img");
    img.src = act.img;
    img.alt = act.title;

    const date = document.createElement("time");
    date.textContent = act.date;

    const adress = document.createElement("p");
    adress.textContent = "Dirección: " + act.adress;

    const description = document.createElement("p");
    description.textContent = act.description;

    article.append(h3, img, date, adress, description);

    if (user?.rol === "admin") {
      const editBtn = document.createElement("button");
      editBtn.textContent = "Modificar";
      editBtn.classList.add("edit-btn");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Borrar";
      deleteBtn.classList.add("delete-btn");

      article.append(editBtn, deleteBtn);

      editBtn.addEventListener("click", () => openEditForm(act));
      deleteBtn.addEventListener("click", () => deleteActivity(act._id));

    } else if (user?.rol === "user") {
      const joinBtn = document.createElement("button");
      const isUserJoined = act.users?.some(u => u._id === user._id);
      joinBtn.textContent = isUserJoined ? "Apuntado ✅" : "Me apunto";
      joinBtn.disabled = isUserJoined;
      joinBtn.classList.add("join-btn");

      joinBtn.addEventListener("click", async () => {
        const res = await API({ 
          endpoint: `/activities/${act._id}/join`,
          method: "POST",
          isJSON: false
        });
        if (res?._id) {
          alert("✅ Te has apuntado a la actividad");
          joinBtn.textContent = "Apuntado ✅";
          joinBtn.disabled = true;
        } else {
          alert("❌ Error al apuntarte. Asegúrate de estar logueado.");
        }
      });

      article.appendChild(joinBtn);
    }

    divActivities.appendChild(article);
  }
}