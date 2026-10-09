const telefono = "526641646512";

const paquetes = [
  {
    grupo: "doble",
    velocidad: "200",
    precio: 350,
    periodo: "al mes x 6 meses",
    precioRegular: 450,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija"]
  },
  {
    grupo: "doble",
    velocidad: "300",
    precio: 450,
    periodo: "al mes x 6 meses",
    precioRegular: 550,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija"]
  },
  {
    grupo: "doble",
    velocidad: "500",
    precio: 650,
    periodo: "al mes x 6 meses",
    precioRegular: 750,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija"]
  },
  {
    grupo: "doble",
    velocidad: "1000",
    precio: 850,
    periodo: "al mes x 6 meses",
    precioRegular: 950,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija", "Mega Navegación Segura", "Mega Control Parental"]
  },
  {
    grupo: "triple",
    velocidad: "200",
    precio: 500,
    periodo: "al mes x 6 meses",
    precioRegular: 600,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija", "Xview+", "Más de 120 canales interactivos", "Amazon Prime", "Netflix"]
  },
  {
    grupo: "triple",
    velocidad: "300",
    precio: 600,
    periodo: "al mes x 6 meses",
    precioRegular: 700,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija", "Xview+", "Más de 120 canales interactivos", "Amazon Prime", "Netflix"]
  },
  {
    grupo: "triple",
    velocidad: "500",
    precio: 800,
    periodo: "al mes x 6 meses",
    precioRegular: 900,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija", "Xview+", "Más de 120 canales interactivos", "Amazon Prime", "Netflix"]
  },
  {
    grupo: "triple",
    velocidad: "1000",
    precio: 1000,
    periodo: "al mes x 6 meses",
    precioRegular: 1100,
    anticipo: 200,
    caracteristicas: ["Internet simétrico", "Fibra óptica", "Telefonía fija", "Xview+", "Más de 120 canales interactivos", "Amazon Prime", "Netflix"]
  }
];

function crearPaquete(paquete) {
  const nombreGrupo = paquete.grupo === "doble" ? "Doble Pack" : "Triple Pack";
  const mensaje = `Hola, me interesa el ${nombreGrupo} de ${paquete.velocidad} Mbps con precio promocional de $${paquete.precio} al mes por 6 meses. ¿Me pueden confirmar cobertura, anticipo y condiciones vigentes?`;
  const whatsapp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return `
    <article class="package">
      <div class="package-top">
        <div class="package-type">${nombreGrupo}</div>
        <div class="speed">${paquete.velocidad}<small> Mbps</small></div>
      </div>
      <div class="package-body">
        <div class="price">$${paquete.precio.toLocaleString("es-MX")}<small>${paquete.periodo}</small></div>
        <p class="regular-price">Después de la promoción: <strong>$${paquete.precioRegular.toLocaleString("es-MX")}/mes</strong></p>
        <p class="deposit">Anticipo indicado: $${paquete.anticipo}</p>
        <ul class="package-features">
          ${paquete.caracteristicas.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <a class="package-btn" href="${whatsapp}" target="_blank" rel="noopener noreferrer">Solicitar información</a>
      </div>
    </article>
  `;
}

function mostrarPaquetes() {
  const doble = document.getElementById("doble-grid");
  const triple = document.getElementById("triple-grid");
  if (!doble || !triple) return;

  doble.innerHTML = paquetes.filter(p => p.grupo === "doble").map(crearPaquete).join("");
  triple.innerHTML = paquetes.filter(p => p.grupo === "triple").map(crearPaquete).join("");
}

mostrarPaquetes();

const formulario = document.getElementById("contactForm");
if (formulario) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const interes = document.getElementById("interes").value;

    if (!nombre || !interes) {
      alert("Escribe tu nombre y selecciona el paquete que te interesa.");
      return;
    }

    const mensaje = `Hola, soy ${nombre}. Me interesa el ${interes}. Me gustaría recibir información, confirmar cobertura y conocer las condiciones vigentes.`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
