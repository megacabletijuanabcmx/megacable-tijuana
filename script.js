const telefono = "526641646512";

const paquetes = [

  {
    grupo: "doble",
    velocidad: "200",
    precio: "350",
    periodo: "al mes x 12 meses",
    caracteristicas: [
      "Fibra óptica",
      "Velocidad simétrica",
      "Telefonía fija",
  
    ]
  },

  {
    grupo: "doble",
    velocidad: "300",
    precio: "450",
    periodo: "al mes x 12 meses",
    caracteristicas: [
      "Fibra óptica",
      "Velocidad simétrica",
      "Telefonía fija",
      
    ]
  },

  {
    grupo: "doble",
    velocidad: "500",
    precio: "650",
    periodo: "al mes x 12 meses",
    caracteristicas: [
      "Fibra óptica",
      "Velocidad simétrica",
      "Telefonía fija",
      "WiFi Ultra incluido"
    ]
  },

  {
    grupo: "doble",
    velocidad: "1000",
    precio: "850",
    periodo: "al mes x 12 meses",
    caracteristicas: [
      "Fibra óptica",
      "Velocidad simétrica",
      "Telefonía fija",
      "WiFi Ultra incluido"
    ]
  },


  {
    grupo: "triple",
    velocidad: "200",
    precio: "500",
    periodo: "al mes x 12 meses",
    caracteristicas: [
      "Fibra óptica",
      "Velocidad simétrica",
      "Telefonía fija",
      "Xview+",
      "Más de 80 canales HD",
      "Amazon Prime"
    ]
  },

  {
    grupo: "triple",
    velocidad: "300",
    precio: "600",
    periodo: "al mes x 12 meses",
    caracteristicas: [
      "Fibra óptica",
      "Velocidad simétrica",
      "Telefonía fija",
      "Xview+",
      "Más de 80 canales HD",
      "Amazon Prime"
    ]
  },

  {
    grupo: "triple",
    velocidad: "500",
    precio: "800",
    periodo: "al mes x 12 meses",
    caracteristicas: [
      "Fibra óptica",
      "Velocidad simétrica",
      "Telefonía fija",
      "Xview+",
      "WiFi Ultra",
      "Amazon Prime"
    ]
  },

  {
    grupo: "triple",
    velocidad: "1000",
    precio: "1,000",
    periodo: "al mes",
    caracteristicas: [
      "Full Connected Home",
      "1 extensor Mesh",
      "2 TVs con 120 canales",
      "Xview+ interactiva",
      "Telefonía ilimitada",
      "Amazon Prime + HBO Max"
    ]
  }

];


function crearPaquete(paquete) {

  const mensaje =
    `Hola, me interesa el paquete ${paquete.grupo === "doble" ? "Doble Pack" : "Triple Pack"} de ${paquete.velocidad} Mbps por $${paquete.precio}. ¿Me pueden dar información?`;

  const whatsapp =
    `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;


  return `

    <article class="package">

      <div class="package-top">

        <div class="package-type">
          ${paquete.grupo === "doble"
            ? "DOBLE PACK"
            : "TRIPLE PACK"}
        </div>

        <div class="speed">
          ${paquete.velocidad}
          <small>Mbps</small>
        </div>

      </div>


      <div class="package-body">

        <div class="price">
          $${paquete.precio}
          <small>
            ${paquete.periodo}
          </small>
        </div>


        <ul class="package-features">

          ${paquete.caracteristicas
            .map(item => `<li>${item}</li>`)
            .join("")}

        </ul>


        <a
          class="package-btn"
          href="${whatsapp}"
          target="_blank">

          Solicitar información

        </a>

      </div>

    </article>

  `;
}


function mostrarPaquetes() {

  const doble =
    document.getElementById("doble-grid");

  const triple =
    document.getElementById("triple-grid");


  doble.innerHTML = paquetes
    .filter(p => p.grupo === "doble")
    .map(crearPaquete)
    .join("");


  triple.innerHTML = paquetes
    .filter(p => p.grupo === "triple")
    .map(crearPaquete)
    .join("");
}


mostrarPaquetes();


/* FORMULARIO */

const formulario =
  document.getElementById("contactForm");


formulario.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();


    const nombre =
      document.getElementById("nombre").value.trim();


    const interes =
      document.getElementById("interes").value;


    if (!interes) {

      alert(
        "Selecciona el paquete que te interesa."
      );

      return;
    }


    const mensaje =
      `Hola, soy ${nombre}. Me interesa el ${interes}. Me gustaría recibir información y conocer la disponibilidad.`;


    const url =
      `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;


    window.open(url, "_blank");

  }
);
