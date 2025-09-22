import "./userMenu.css";

import { showSection } from "../../utils/showSections";
import { updateUserMenu } from "./updateUserMenu";
import { getMyActivities } from "../../pages/myActivities/myActivities";

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
  myActivitiesButon.style.display = "none";
  myActivitiesButon.addEventListener("click", async () => {
    showSection("myActivitiesSection");
    const section = document.getElementById("myActivitiesSection");
    await getMyActivities(section);
});

  const logoutButon = document.createElement("button");
  logoutButon.textContent = "Cerrar sesión";
  logoutButon.id = "logoutBtn";
  logoutButon.style.display = "none";

  userContainer.append(loginButon, registerButon, myActivitiesButon, logoutButon);

  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    updateUserMenu(storedUser);
  }

  return userContainer;
};