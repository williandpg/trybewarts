const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const button = document.querySelector('.btn');
const btn = () => {
  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
};
button.addEventListener('click', btn);

const btnEnviar = document.querySelector('#submit-btn');
const check = document.querySelector('#agreement');

check.addEventListener('click', () => {
  if (check.checked === true) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});

const inputTextarea = document.getElementById('textarea');
const counterTextarea = document.getElementById('counter');
inputTextarea.addEventListener('keyup', () => {
  counterTextarea.innerHTML = 500 - inputTextarea.value.length;
});
