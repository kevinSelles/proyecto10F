import { openEditForm } from "../create/editActivity";
import { deleteActivity } from "../create/deleteActivity";

export function createAdminButtons(act) {
  const editBtn = document.createElement("button");
  editBtn.textContent = "Modificar";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Borrar";
  deleteBtn.classList.add("delete-btn");

  editBtn.addEventListener("click", () => openEditForm(act));
  deleteBtn.addEventListener("click", () => deleteActivity(act._id));

  return [editBtn, deleteBtn];
}