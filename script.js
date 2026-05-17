const form = document.querySelector("#order-form");
const statusMessage = document.querySelector("#form-status");
const whatsappNumber = "351966569677";

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const combo = String(data.get("combo") || "").trim();

  if (!name || !combo) {
    statusMessage.textContent = "Preencha seu nome e escolha um combo.";
    return;
  }

  const message = `Oi, sou ${name}. Quero pedir: ${combo}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  statusMessage.textContent = "Abrindo WhatsApp com seu pedido...";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
