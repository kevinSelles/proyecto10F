import "./register.css";
import { getRegisterFunction } from "./registerFunction";

export function getRegister(section) {
  const title = document.createElement("h2");
  title.textContent = "Registro de usuario";
  title.classList.add("register-title");

  const form = document.createElement("form");
  form.classList.add("register-form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Nombre";
  nameInput.required = true;

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Correo";
  emailInput.required = true;

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "Contraseña";
  passwordInput.required = true;

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Registrarse";

  form.append(nameInput, emailInput, passwordInput, submitBtn);

  section.append(title, form);

  getRegisterFunction(form, nameInput, emailInput, passwordInput);
}