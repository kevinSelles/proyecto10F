import "./createActivity.css";
import { API } from "../../utils/API";
import { getActivities } from "../activities/activities";
import { buildForm } from "./formActivity";
import { editSubmit, clearEditing } from "./editActivity";
import { resetActivityForm } from "./resetActivityForm";
import { getFormData } from "./getFormData";

export function getCreateActivity(section) {
  section.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Crea o modifica una actividad";
  title.classList.add("create-title");

  const form = buildForm();
  section.append(title, form);

  const submitBtn = form.querySelector("button[type='submit']");
  const cancelBtn = form.querySelector(".cancel-btn");

  cancelBtn.addEventListener("click", () => resetActivityForm(form, submitBtn, cancelBtn));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = getFormData(form);

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