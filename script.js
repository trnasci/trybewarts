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

function submitBtn() {
  const buttonSub = document.getElementById('submit-btn');
  const agree = document.getElementById('agreement');
  agree.checked = false;
  if (agree.checked = true) {
    buttonSub.disabled = false;
  } else {
    buttonSub.disabled = true;
  }
}

window.onload = function open() {
  submitBtn();
}
