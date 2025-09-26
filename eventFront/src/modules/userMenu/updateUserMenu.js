import { showSection } from "../../utils/showSections";

export function updateUserMenu(user) {
  const loginBtn = document.querySelector("#loginBtn");
  const registerBtn = document.querySelector("#registerBtn");
  const logoutBtn = document.querySelector("#logoutBtn");
  const myActivitiesBtn = document.querySelector("#myActivitiesBtn");

  const buttons = [
    { element: loginBtn, display: user ? "none" : "inline-block" },
    { element: registerBtn, display: user ? "none" : "inline-block" },
    { element: logoutBtn, display: user ? "inline-block" : "none" },
    { element: myActivitiesBtn, display: user && user.rol === "user" ? "inline-block" : "none" }
  ];

  for (const button of buttons) {
    if (button.element) {
      button.element.style.display = button.display;
    }
  };

  if (!user) {
    const createBtn = document.querySelector("#createActivityBtn");
    if (createBtn) createBtn.remove();
    return;
  };

  if (user.rol === "admin") {
    let createBtn = document.querySelector("#createActivityBtn");
    if (!createBtn) {
      createBtn = document.createElement("button");
      createBtn.id = "createActivityBtn";
      createBtn.textContent = "Crear actividad";
      createBtn.addEventListener("click", () => {
        showSection("createSection");
      });
      if (logoutBtn && logoutBtn.parentNode) {
        logoutBtn.parentNode.insertBefore(createBtn, logoutBtn);
      }
    };
  };

  const logout = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => { 
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      location.reload();
    });
  };
};