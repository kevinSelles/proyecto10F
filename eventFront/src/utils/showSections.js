export function showSection(sectionId) {

  const sections = document.querySelectorAll("main > section");

  for (const section of sections) {
    section.style.display = "none";
  }
  
  const section = document.getElementById(sectionId);

  if (section) {
    section.style.display = "block";
  }
};