document.addEventListener("DOMContentLoaded", function () {

  fetch("../comidas.xml")
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");

      const comidas = xmlDoc.querySelectorAll("comida");

      const tableBody = document.getElementById("menuTableBody");

      comidas.forEach((comida) => {
        const nome = comida.querySelector("nome").textContent;
        const calorias = comida.querySelector("calorias").textContent;
        const preco = comida.querySelector("preco").textContent;

        const row = document.createElement("tr");
        row.innerHTML = `<td>${nome}</td><td>${calorias}</td><td>${preco}</td>`;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching XML:", error));
});
