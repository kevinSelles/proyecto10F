import "./userMenu.css";

import { showSection } from "../../utils/showSections";

export function getUserMenu() {

  const userContainer = document.createElement("div");
  userContainer.classList.add("user-container");

  const loginButon = document.createElement("button");
  loginButon.textContent = "Login";
  loginButon.addEventListener("click", () => showSection("loginSection"));

  const registerButon = document.createElement("button");
  registerButon.textContent = "Registro";
  registerButon.addEventListener("click", () => showSection("registerSection"));

  const myActivitiesButon = document.createElement("button");
  myActivitiesButon.textContent = "Mis Actividades";
  myActivitiesButon.addEventListener("click", () => showSection("myActivitiesSection"));

  userContainer.append(loginButon, registerButon, myActivitiesButon);

  return userContainer;
};