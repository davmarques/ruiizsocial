const FormEmpresa = () => {
    return (
        <div className="form-cadastro" id="form-cadastro">
            <h1>Preencha seus dados e junte-se a nós!</h1>
            <form>
                <input type="text" placeholder="Empresa" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Telefone (WhatsApp)" required />
                <input type="text" placeholder="Cidade" required />
                <input type="text" placeholder="Estado" required />
                <input type="text" placeholder="CEP" required />
                <textarea type="text" placeholder="Descreva os serviços oferecidos." required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormEmpresa
