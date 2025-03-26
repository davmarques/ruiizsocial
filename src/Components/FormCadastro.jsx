

const FormCadastro = () => {
    return (
        <div className="form-cadastro" id="form-cadastro">
                <h1>Preencha seus dados e junte-se a nós!</h1>
            <form>
                <input type="text" placeholder="Nome" required/>
                <input type="text" placeholder="Sobrenome" required/>
                <input type="text" placeholder="Email" required/>
                <input type="text" placeholder="Telefone (WhatsApp)" required/>
                <select name="Especialidade" id="" required>
                    <option value="">Especialidade</option>
                </select>
                <input type="text" placeholder="CR" required/>
                <select name="AreaAtuacao" id="" required>
                    <option value="">Área de Atuação</option>
                </select>
                <select name="genero" id="" required>
                    <option value="masc">Masculino</option>
                    <option value="fem">Feminino</option>
                </select>
                <input type="number" placeholder="Valor da Consulta" style={{appearance: 'none'}} required/>
                <select name="PublicoAlvo" id="" required>
                    <option value="">Público Alvo</option>
                </select>
                <select name="atendimento" id="atendimento" required>
                    <option value="presencial">Atendimento</option>
                    <option value="presencial">Presencial</option>
                    <option value="remoto">Remoto</option>
                    <option value="ambos">Ambos</option>
                </select>
                <input type="text" placeholder="Cidade" required/>
                <input type="text" placeholder="Estado" required/>
                <input type="text" placeholder="CEP" required/>
                <textarea type="text" placeholder="Descreva você e sua experiência na área da saúde." required/>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormCadastro