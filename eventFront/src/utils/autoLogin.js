import { updateUserMenu } from "../modules/userMenu/updateUserMenu";
import { getActivities } from "../pages/activities/activities";

export function autoLogin() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const activitiesSection = document.getElementById("activitiesSection");
  if (token && user) {
    updateUserMenu(JSON.parse(user));
  }
}