import "./userMenu.css";

import { showSection } from "../../utils/showSections";
import { updateUserMenu } from "./updateUserMenu";

export function getUserMenu() {

  const userContainer = document.createElement("div");
  userContainer.classList.add("user-container");

  const loginButon = document.createElement("button");
  loginButon.textContent = "Login";
  loginButon.id = "loginBtn";
  loginButon.addEventListener("click", () => showSection("loginSection"));

  const registerButon = document.createElement("button");
  registerButon.textContent = "Registro";
  registerButon.id = "registerBtn";
  registerButon.addEventListener("click", () => showSection("registerSection"));

  const myActivitiesButon = document.createElement("button");
  myActivitiesButon.textContent = "Mis Actividades";
  myActivitiesButon.id = "myActivitiesBtn";
  myActivitiesButon.addEventListener("click", () => showSection("myActivitiesSection"));

  const logoutButon = document.createElement("button");
  logoutButon.textContent = "Cerrar sesión";
  logoutButon.id = "logoutBtn";

  userContainer.append(loginButon, registerButon, myActivitiesButon, logoutButon);

  return userContainer;
};