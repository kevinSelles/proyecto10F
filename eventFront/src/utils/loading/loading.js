import "./loading.css";

const LOADING_DURATION = 1000;
let loadingTimeout = null;

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

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    window.showLoading();

    if (loadingTimeout) clearTimeout(loadingTimeout);

    loadingTimeout = setTimeout(() => {
      window.hideLoading();
      loadingTimeout = null;
    }, LOADING_DURATION);
  });
}