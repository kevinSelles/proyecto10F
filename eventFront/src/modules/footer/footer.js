import "./footer.css";

export function getFooter() {

  const footer = document.createElement("footer");
  
  const footerInfo = document.createElement("p");
  footerInfo.classList.add("footer-info");
  footerInfo.textContent = "Este es un evento ficticio, creado como proyecto académico por el estudiante Kevin Selles. Si te ha gustado, te invito a visitar ";

  const footerLink = document.createElement("a");
  footerLink.href = "https://kevinselles.netlify.app";
  footerLink.target = "_blank";
  footerLink.textContent = "mi portfolio";

  footerInfo.appendChild(footerLink);
  footer.appendChild(footerInfo);

  return footer;
}