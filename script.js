const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const btn = () => {
  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
};
