function loadData() {
    fetch('../comidas.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'application/xml');
            showTheList(xmlDoc);
        })
        .catch(error => console.error('Erro ao carregar dados:', error));
}

function showTheList(xml) {
    const tableBody = document.getElementById('comidasBody');
    const comidaList = xml.querySelectorAll('comida');

    comidaList.forEach(comida => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerHTML = comida.querySelector('nome').textContent;
        row.insertCell(1).innerHTML = comida.querySelector('calorias').textContent;
        row.insertCell(2).innerHTML = comida.querySelector('preco').textContent;
    });
}
loadData();