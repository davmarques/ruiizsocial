import React from 'react'

function LoginForm({ onSwitchForm }) {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <input type="text" placeholder='Nome de Usuário' required/>
            <input type="password" placeholder='Senha' required/>
            <button>Entrar</button>
            <a href="#" onClick={() => onSwitchForm('signup')}>Não tem uma conta?</a>
            <a href="#">Esqueceu a senha?</a>
        </div>
    )
}

export default LoginForm