function validarFormulario() {
    var email = document.getElementById('email').value;

    if (email.trim() === '') {
        alert('Por favor, preencha o campo de e-mail!');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    return true;
}

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    validarFormulario();
});
