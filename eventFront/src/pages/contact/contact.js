import "./contact.css";
import { contactFunction } from "./contactFunction";

export function getContact(section) {
  const title = document.createElement("h2");
  title.textContent = "Si tienes cualquier duda o necesitas algo, escríbenos por aquí:";
  title.classList.add("contact-title");
  section.appendChild(title);

  const form = document.createElement("form");
  form.classList.add("contact-form");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Tu nombre";
  nameInput.required = true;

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Tu correo";
  emailInput.required = true;

  const messageInput = document.createElement("textarea");
  messageInput.name = "message";
  messageInput.placeholder = "Escribe tu consulta aquí...";
  messageInput.rows = 5;
  messageInput.required = true;

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Enviar";

  form.append(nameInput, emailInput, messageInput, submitBtn);

  section.appendChild(form);

  contactFunction(form, nameInput, emailInput, messageInput);
}