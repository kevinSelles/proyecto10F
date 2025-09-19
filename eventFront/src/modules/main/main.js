import "./main.css";

export function getMain() {

  const main = document.createElement("main");

  const sectionIds = [
    { id: "homeSection", title: "Home" },
    { id: "activitiesSection", title: "Actividades" },
    { id: "gallerySection", title: "Galería" },
    { id: "contactSection", title: "Contacto" },
    { id: "loginSection", title: "Login" },
    { id: "registerSection", title: "Registro" },
    { id: "myActivitiesSection", title: "Mis Actividades" }
  ];

  for (const { id, title } of sectionIds) {
    const section = document.createElement("section");
    section.id = id;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    section.appendChild(h2);

    if (id !== "homeSection") {
      section.style.display = "none";
    }

    main.appendChild(section);
  }

  return main;
}
