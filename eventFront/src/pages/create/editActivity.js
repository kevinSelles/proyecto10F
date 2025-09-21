import { API } from "../../utils/API";

let editingId = null;

export function openEditForm(activity) {

  const sections = document.querySelectorAll("main > section");
  for (const sec of sections) {
    sec.style.display = "none";
  }

  const section = document.getElementById("createSection");
  section.style.display = "flex";

  const form = document.querySelector("#createActivityForm");
  if (!form) return;

  form.querySelector("input[name='title']").value = activity.title;
  form.querySelector("textarea[name='description']").value = activity.description;
  form.querySelector("input[name='date']").value = activity.date.split("T")[0];
  form.querySelector("input[name='adress']").value = activity.adress;
  form.querySelector("button[type='submit']").textContent = "Modificar actividad";
  form.querySelector(".cancel-btn").style.display = "inline-block";

  editingId = activity._id;
}

export async function editSubmit(formData) {
  if (!editingId) return null;

  const res = await API({
    endpoint: `/activities/${editingId}`,
    method: "PUT",
    body: formData,
    isJSON: false
  });

  return res;
}

export function clearEditing() {
  editingId = null;
}