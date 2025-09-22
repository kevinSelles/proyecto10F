export function createActivityCard(act) {
  const article = document.createElement("article");
  article.classList.add("activity-card");
  article.dataset.id = act._id;

  const h3 = document.createElement("h3");
  h3.textContent = act.title;

  const img = document.createElement("img");
  img.src = act.img;
  img.alt = act.title;

  const date = document.createElement("time");
  date.textContent = act.date;

  const adress = document.createElement("p");
  adress.textContent = "Dirección: " + act.adress;

  const description = document.createElement("p");
  description.textContent = act.description;

  const divButtons = document.createElement("div");
  divButtons.classList.add("buttons-container");

  article.append(h3, img, date, adress, description, divButtons);

  return { article, divButtons };
}