

const FormCadastro = () => {
    return (
        <div className="form-cadastro">
                <h1>Preencha seus dados e junte-se a nós!</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Telefone" />
                <select name="Especialidade" id="">
                    <option value="">Especialidade</option>
                </select>
                <input type="text" placeholder="CR" />
                <select name="AreaAtuacao" id="">
                    <option value="">Área de Atuação</option>
                </select>
                <select name="genero" id="">
                    <option value="masc">Masculino</option>
                    <option value="fem">Feminino</option>
                </select>
                <input type="number" placeholder="Valor da Consulta"/>
                <select name="PublicoAlvo" id="">
                    <option value="">Público Alvo</option>
                </select>
                <label htmlFor="Atendimento"><input type="checkbox" name="Atendimento" id="Atendimento" />Atendimento</label>
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="Estado" />
                <input type="text" placeholder="CEP" />
                <input type="text" placeholder="Descreva você e sua experiência na área da saúde."/>
            </form>
                <button type="submit">Cadastrar</button>
        </div>
    )
}

export default FormCadastro