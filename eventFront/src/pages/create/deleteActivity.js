import { API } from "../../utils/API";

export async function deleteActivity(id) {

  if (!confirm("¿Seguro que quieres borrar esta actividad?")) return;

  const res = await API({
    endpoint: `/activities/${id}`,
    method: "DELETE"
  });

  if (res) {
    alert("Actividad eliminada");
    const article = document.querySelector(`[data-id="${id}"]`);
    if (article) article.remove();
  }
};