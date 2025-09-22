import { API } from "../../utils/API";
import { getActivities } from "./activities";
import { participantsModal } from "./participantsModal";

export function createUserButtons(act, user, section) {
  const divButtons = document.createElement("div");
  divButtons.classList.add("buttons-container");

  const isUserJoined = act.users?.some(u => u._id === user._id);

  const joinBtn = document.createElement("button");
  joinBtn.textContent = "Me apunto";
  joinBtn.classList.add("join-btn");

  const leaveBtn = document.createElement("button");
  leaveBtn.textContent = "Abandonar actividad";
  leaveBtn.classList.add("leave-btn");

  joinBtn.addEventListener("click", async () => {
    const res = await API({ endpoint: `/activities/${act._id}/join`, method: "POST", isJSON: false });
    if (res?._id) joinBtn.replaceWith(leaveBtn);
    else alert("❌ Error al apuntarte. Asegúrate de estar logueado.");
  });

  leaveBtn.addEventListener("click", async () => {
    const res = await API({ endpoint: `/activities/${act._id}/leave`, method: "POST", isJSON: false });
    if (res?._id) {
      leaveBtn.replaceWith(joinBtn);
      const activitiesSection = document.getElementById("activitiesSection");
      if (activitiesSection && section.id === "myActivitiesSection") await getActivities(activitiesSection);
    } else alert("❌ Error al abandonar la actividad");
  });

  const participantsBtn = document.createElement("button");
  participantsBtn.textContent = "Ver participantes";
  participantsBtn.classList.add("participants-btn");
  participantsBtn.addEventListener("click", async () => {
  const updatedAct = await API({ endpoint: `/activities/${act._id}`, method: "GET" });
  participantsModal(updatedAct.users);
});

  divButtons.append(isUserJoined ? leaveBtn : joinBtn, participantsBtn);

  return divButtons;
};