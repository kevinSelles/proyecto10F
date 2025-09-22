import { clearEditing } from "./editActivity";

export function resetActivityForm(form, submitBtn, cancelBtn) {
  form.reset();
  submitBtn.textContent = "Crear actividad";
  cancelBtn.style.display = "none";
  clearEditing();

  const sections = document.querySelectorAll("main > section");
  for (const sectionElement of sections) sectionElement.style.display = "none";
  document.getElementById("activitiesSection").style.display = "block";
};