const form = document.getElementById('contactForm');
const table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
const listaDeContato = document.getElementById('contactList');
const TelefoneInput = document.getElementById('phone');
const contatos = {};

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const Telefone = TelefoneInput.value;
    const [PrimeiroNome, Sobrenome] = nome.split(' ');
    if (ValidarTelefone(Telefone) && ValidarNome(PrimeiroNome, Sobrenome) && !contatos[Telefone]) {
        addContact(PrimeiroNome, Sobrenome, Telefone);
        contatos[Telefone] = true;
    } else {
        alert("Por favor, verifique os dados do contato.");
    }
    form.reset();
});

function ValidarTelefone(Telefone) {
    // Verifica se o telefone contém apenas números e possui no mínimo 10 dígitos
    const regex = /^[0-9]{10,}$/;
    return regex.test(Telefone);
}

function ValidarNome(PrimeiroNome, Sobrenome) {    
    return PrimeiroNome && Sobrenome;
}

function addContact(PrimeiroNome, Sobrenome, Telefone) {
    const novaLinha = table.insertRow();
    const campoNome = novaLinha.insertCell(0);
    const campoTelefone = novaLinha.insertCell(1);
    campoNome.textContent = `${PrimeiroNome} ${Sobrenome}`;
    campoTelefone.textContent = Telefone;
    const contatoUnico = document.createElement('li');
    contatoUnico.textContent = `${PrimeiroNome} ${Sobrenome}: ${Telefone}`;
    listaDeContato.appendChild(contatoUnico);
}
