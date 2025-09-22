import "./title.css"

export function getTitle() {

  const title = document.createElement("h1");
  title.classList.add("event-title");

  const line1 = document.createElement("span");
  line1.textContent = "Splish Splash";

  const line2 = document.createElement("span");
  line2.textContent = "¡El evento más divertido del verano!";

  title.append(line1, line2);

  return title;
};