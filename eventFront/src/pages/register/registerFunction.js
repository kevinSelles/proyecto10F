import { API } from "../../utils/API";
import { updateUserMenu } from "../../modules/userMenu/updateUserMenu";
import { showSection } from "../../utils/showSections";
import { getActivities } from "../activities/activities";

export function getRegisterFunction(form, nameInput, emailInput, passwordInput) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newUser = {
      userName: nameInput.value,
      password: passwordInput.value,
      email: emailInput.value,
    };

    const res = await API({
      endpoint: "/users/register",
      method: "POST",
      body: newUser
    });

    if (res?.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      
      updateUserMenu(res.user);
      form.reset();

      showSection("homeSection");
      getActivities(document.getElementById("activitiesSection"));
      alert("✅ Registro completado. Bienvenido!");
    } else {
      alert("❌ Error en el registro: " + (res?.error || "Inténtalo de nuevo"));
    }
  });
}