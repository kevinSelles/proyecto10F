export function participantsModal(users = []) {
  const list = document.createElement("ul");
  list.classList.add("participants-list");

  if (users.length > 0) {
    for (const u of users) {
      const li = document.createElement("li");
      li.textContent = u.userName;
      list.appendChild(li);
    }
  } else {
    const li = document.createElement("li");
    li.textContent = "No hay participantes todavía";
    list.appendChild(li);
  }

  const modal = document.createElement("div");
  modal.classList.add("participants-modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("participants-modal-content");

  const title = document.createElement("h3");
  title.textContent = "👥 Participantes";
  title.classList.add("participants-title");
  modalContent.prepend(title);

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "✖";
  closeBtn.classList.add("close-modal");
  closeBtn.addEventListener("click", () => modal.remove());

  modalContent.append(closeBtn, list);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}