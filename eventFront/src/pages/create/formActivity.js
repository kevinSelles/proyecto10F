export function buildForm() {
  
  const form = document.createElement("form");
  form.id = "createActivityForm";
  form.classList.add("create-form");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.placeholder = "Título";
  titleInput.required = true;

  const imgInput = document.createElement("input");
  imgInput.type = "file";
  imgInput.name = "img";
  imgInput.required = true;

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.name = "date";
  dateInput.required = true;

  const adressInput = document.createElement("input");
  adressInput.type = "text";
  adressInput.name = "adress";
  adressInput.placeholder = "Dirección";
  adressInput.required = true;

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "description";
  descriptionInput.placeholder = "Descripción";
  descriptionInput.required = true;

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Crear actividad";

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancelar";
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.style.display = "none";

  form.append(titleInput, imgInput, dateInput, adressInput, descriptionInput, submitBtn, cancelBtn);

  return form;
};