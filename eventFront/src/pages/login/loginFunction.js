import { API } from "../../utils/API";
import { updateUserMenu } from "../../modules/userMenu/updateUserMenu";
import { showSection } from "../../utils/showSections";
import { getActivities } from "../activities/activities";

export function loginFunction(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = form.querySelector("input[name='name']");
    const passwordInput = form.querySelector("input[name='password']");

    const credentials = {
      userName: nameInput.value,
      password: passwordInput.value
    };

    const res = await API({
      endpoint: "/users/login",
      method: "POST",
      body: credentials
    });

    if (res?.token) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      updateUserMenu(res.user);
      form.reset();
      showSection("homeSection");

      getActivities(document.getElementById("activitiesSection"));

      alert("✅ Sesión iniciada correctamente. Bienvenido!");
    } else {
      alert("❌ Error en el login: " + (res?.error || "Inténtalo de nuevo"));
    }
  });
};
