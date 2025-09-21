import "./register.css";
import { API } from "../../utils/API";
import { updateUserMenu } from "../../modules/userMenu/updateUserMenu";
import { showSection } from "../../utils/showSections";

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
      alert("✅ Registro completado. Bienvenido!");
    } else {
      alert("❌ Error en el registro: " + (res?.error || "Inténtalo de nuevo"));
    }
  });

  section.append(title, form);
}