import { updateUserMenu } from "../modules/userMenu/updateUserMenu";

export function autoLogin() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (token && user) {
    updateUserMenu(JSON.parse(user));
  }
}