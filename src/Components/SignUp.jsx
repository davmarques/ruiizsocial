import React from 'react';

function LoginForm({ onSwitchForm }) {
  return (
    <div className="login-form">
      <h2>Inscrever-se</h2>
      <input type="text" placeholder="Nome de usuário" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Senha" required />
      <input type="number" placeholder="CEP" required />
      <input type="text" placeholder="Endereço" required />
      <button>Cadastrar-se</button>
      <a href="#" onClick={() => onSwitchForm('login')}>Já possui uma conta?</a>
    </div>
  );
}

export default LoginForm;