import "./loading.css";

export function initLoading() {
  const loading = document.createElement("div");
  loading.id = "customLoading";
  loading.classList.add("hidden");

  const animation = document.createElement("div");
  animation.classList.add("loading-animation");

  loading.appendChild(animation);
  document.body.appendChild(loading);

  window.showLoading = () => {
    loading.classList.remove("hidden");
  };

  window.hideLoading = () => {
    loading.classList.add("hidden");
  };
}