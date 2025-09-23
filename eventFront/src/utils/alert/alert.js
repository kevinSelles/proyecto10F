import "./alert.css"

export function customAlert() {

  const modal = document.createElement("div");
  modal.id = "customAlert";
  modal.classList.add("hidden");

  const content = document.createElement("div");
  content.classList.add("alert-content");

  const alertMessage = document.createElement("p");
  alertMessage.id = "alertMessage";

  const closeButton = document.createElement("button");
  closeButton.id = "alertClose";
  closeButton.textContent = "Cerrar";

  content.append(alertMessage, closeButton);
  modal.appendChild(content);
  document.body.appendChild(modal);

    function showAlert(msg) {
    alertMessage.textContent = msg;
    modal.classList.remove("hidden");
  }

  function hideAlert() {
    modal.classList.add("hidden");
  }

  closeButton.addEventListener("click", hideAlert);

  window.alert = showAlert;
}