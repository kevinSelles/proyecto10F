export function showSection(sectionId) {

  const sections = document.querySelectorAll("main > section");

  for (const section of sections) {
    section.style.display = "none";
  }
  
  const section = document.getElementById(sectionId);

  if (section) {
    section.style.display = "flex";
  }

  const navButtons = document.querySelectorAll("nav button");

  for (const button of navButtons) {
      if (button.dataset.section === sectionId) {
        button.classList.add("active");
    } else {
        button.classList.remove("active");
    }
  }
};