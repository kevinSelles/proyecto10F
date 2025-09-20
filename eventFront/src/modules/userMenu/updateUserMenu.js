import { showSection } from "../../utils/showSections";

export function updateUserMenu(user) {

  const loginBtn = document.querySelector("#loginBtn");
  const registerBtn = document.querySelector("#registerBtn");
  const logoutBtn = document.querySelector("#logoutBtn");

  if (loginBtn) loginBtn.style.display = "none";
  if (registerBtn) registerBtn.style.display = "none";

  if (logoutBtn) {
    logoutBtn.style.display = "inline-block";

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      if (loginBtn) loginBtn.style.display = "inline-block";
      if (registerBtn) registerBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";

      showSection("homeSection");
    });
  }
};