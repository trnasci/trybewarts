const formHeader = document.querySelector('.trybewarts-login');

function validarForm(event) {
  const email = event.target[0];
  const senha = event.target[1];

  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Email ou senha inválidos.');
    return;
  }
  alert('Olá, Tryber!');
}

formHeader.addEventListener('submit', validarForm);
