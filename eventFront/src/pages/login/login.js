import "./login.css";
import { loginFunction } from "./loginFunction";

export function getLogin(section) {

  const title = document.createElement("h2");
  title.textContent = "Iniciar sesión";
  title.classList.add("login-title");

  const form = document.createElement("form");
  form.classList.add("login-form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Nombre";
  nameInput.required = true;

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "Contraseña";
  passwordInput.required = true;

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Entrar";

  form.append(nameInput, passwordInput, submitBtn);

  section.append(title, form);

  loginFunction(form);
};