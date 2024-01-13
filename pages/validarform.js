function validarFormulario() {
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var descricao = document.getElementById('description').value;

    if (nome.trim() === '' || email.trim() === '' || descricao.trim() === '') {
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    validarFormulario();
});