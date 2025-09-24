export function contactFunction(form, nameInput, emailInput, messageInput) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };

    try {
      const res = await fetch("https://splish-splash-back.vercel.app/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Tu mensaje se envió correctamente");
        form.reset();
      } else {
        alert("❌ Error: Alguno de los campos es erroneo o está en blanco" + data.error);
      }
    } catch (err) {
      console.error("Error enviando formulario:", err);
      alert("❌ No se pudo enviar el formulario");
    };
  });
};