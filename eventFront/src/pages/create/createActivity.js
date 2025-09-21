import "./createActivity.css";
import { API } from "../../utils/API";
import { getActivities } from "../activities/activities";
import { buildForm } from "./formActivity";
import { editSubmit, clearEditing } from "./editActivity";

export function getCreateActivity(section) {
  section.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Crea o modifica una actividad";
  title.classList.add("create-title");

  const form = buildForm();
  section.append(title, form);

  const submitBtn = form.querySelector("button[type='submit']");
  const cancelBtn = form.querySelector(".cancel-btn");
  const titleInput = form.querySelector("input[name='title']");
  const imgInput = form.querySelector("input[name='img']");
  const dateInput = form.querySelector("input[name='date']");
  const adressInput = form.querySelector("input[name='adress']");
  const descriptionInput = form.querySelector("textarea[name='description']");

   cancelBtn.addEventListener("click", () => {
    form.reset();
    submitBtn.textContent = "Crear actividad";
    cancelBtn.style.display = "none";
    clearEditing();

    const sections = document.querySelectorAll("main > section");
    for (const sec of sections) sec.style.display = "none";
    document.getElementById("activitiesSection").style.display = "block";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", titleInput.value);
    if (imgInput.files[0]) formData.append("img", imgInput.files[0]);
    formData.append("date", dateInput.value);
    formData.append("adress", adressInput.value);
    formData.append("description", descriptionInput.value);

    let res;

    if (submitBtn.textContent === "Modificar actividad") {
      res = await editSubmit(formData);
    } else {
      res = await API({
        endpoint: "/activities",
        method: "POST",
        body: formData,
        isJSON: false
      });
    }

    if (res?._id) {
      alert("✅ Actividad guardada correctamente!");
      form.reset();
      submitBtn.textContent = "Crear actividad";
      clearEditing();
      getActivities(document.getElementById("activitiesSection"));
    } else {
      alert("❌ Error: " + (res?.error || "Inténtalo de nuevo"));
    }
  });
}