import React, { useState } from "react";
import api from './api'

const FormCadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [cr, setCr] = useState('');
    const [genero, setGenero] = useState('');
    const [valor, setValor] = useState('');
    const [publicoAlvo, setPublicoAlvo] = useState('');
    const [atendimento, setAtendimento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [foto, setFoto] = useState('');
    const [servico, setServico] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault

        const novoProfissional = {
            nome,
            sobrenome,
            email,
            telefone,
            especialidade,
            cr,
            genero,
            valor,
            publicoAlvo,
            atendimento,
            cidade,
            estado,
            cep,
            foto,
            servico,
        }

        try {
            const response = await api.post('/profissional', novoProfissional);
            console.log('Empresa cadastrada com sucesso: ', response.data)
            setNome('');
            setSobrenome('');
            setEmail('');
            setTelefone('');
            setEspecialidade('');
            setCr('');
            setGenero('');
            setValor('');
            setPublicoAlvo('');
            setAtendimento('');
            setCidade('');
            setEstado('');
            setCep('');
            setFoto('');
            setServico('');

        } catch (error) {
            console.error('Erro ao adicionar profissional: ', error);
        }
    }


    return (
        <div className="form-cadastro" id="form-cadastro">
            <h1>Preencha seus dados e junte-se a nós!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

                <input type="text" placeholder="Sobrenome" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />

                <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input type="number" placeholder="Telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

                <select name="especialidade" id="especialidade" placeholder="Especialidade" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required>
                    <option value="" id="especialidade">Especialidade</option>
                    <option value="acupuntura" id="acupuntura">Acupuntura</option>
                    <option value="alergia_imunologia" id="alergia_imunologia">Alergia e Imunologia</option>
                    <option value="anestesia" id="anestesia">Anestesia</option>
                    <option value="angiologia" id="angiologia">Angiologia</option>
                    <option value="cardiologia" id="cardiologia">Cardiologia</option>
                    <option value="cirurgia" id="cirurgia">Cirurgia</option>
                    <option value="clinica_medica" id="clinica_medica">Clínica Médica</option>
                    <option value="coloproctologia" id="coloproctologia">Coloproctologia</option>
                    <option value="dermatologia" id="dermatologia">Dermatologia</option>
                    <option value="endocrinologia" id="endocrinologia">Endocrinologia</option>
                    <option value="endoscopia" id="endoscopia">Endoscopia</option>
                    <option value="gastroenterologia" id="gastroenterologia">Gastroenterologia</option>
                    <option value="fisioterapia" id="fisioterapia">Fisioterapia</option>
                    <option value="geriatria" id="geriatria">Geriatria</option>
                    <option value="ginecologia_obstetricia" id="ginecologia_obstetricia">Ginecologia e Obstetrícia</option>
                    <option value="hematologia_hemoterapia" id="hematologia_hemoterapia">Hematologia e Hemoterapia</option>
                    <option value="homeopatia" id="homeopatia">Homeopatia</option>
                    <option value="infectologia" id="infectologia">Infectologia</option>
                    <option value="mastologia" id="mastologia">Mastologia</option>
                    <option value="medicina_do_trabalho" id="medicina_do_trabalho">Medicina do Trabalho</option>
                    <option value="medicina_esportiva" id="medicina_esportiva">Medicina Esportiva</option>
                    <option value="medicina_intensiva" id="medicina_intensiva">Medicina Intensiva</option>
                    <option value="medicina_preventiva" id="medicina_preventiva">Medicina Preventiva</option>
                    <option value="nefrologia" id="nefrologia">Nefrologia</option>
                    <option value="neurologia" id="neurologia">Neurologia</option>
                    <option value="nutrição" id="nutrição">Nutrição</option>
                    <option value="nutrologia" id="nutrologia">Nutrologia</option>
                    <option value="oftalmologia" id="oftalmologia">Oftalmologia</option>
                    <option value="oncologia_clinica" id="oncologia_clinica">Oncologia Clínica</option>
                    <option value="ortopedia_traumatologia" id="ortopedia_traumatologia">Ortopedia e Traumatologia</option>
                    <option value="otorrinolaringologia" id="otorrinolaringologia">Otorrinolaringologia</option>
                    <option value="patologia" id="patologia">Patologia</option>
                    <option value="pediatria" id="pediatria">Pediatria</option>
                    <option value="pneumologia" id="pneumologia">Pneumologia</option>
                    <option value="psicologia" id="psicologia">Psicologia</option>
                    <option value="psiquiatria" id="psiquiatria">Psiquiatria</option>
                    <option value="radiologia" id="radiologia">Radiologia</option>
                    <option value="radioterapia" id="radioterapia">Radioterapia</option>
                    <option value="reumatologia" id="reumatologia">Reumatologia</option>
                    <option value="urologia" id="urologia">Urologia</option>
                </select>

                <input type="number" placeholder="C.R." id="cr" value={cr} onChange={(e) => setCr(e.target.value)} required />

                <select name="genero" id="genero" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} required>
                    <option value="masculino" id="masculino">Masculino</option>
                    <option value="feminino" id="feminino">Feminino</option>
                    <option value="outro" id="outro">Outro</option>
                </select>

                <input type="valor" placeholder="Valor da Consulta" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} required />

                <select name="atendimento" id="atendimento" placeholder="Atendimento" value={atendimento} onChange={(e) => setAtendimento(e.target.value)} required>
                    <option value="presencial" id="presencial">Presencial</option>
                    <option value="remoto" id="remoto">Remoto</option>
                    <option value="ambos" id="ambos">Presencial e Remoto</option>
                </select>

                <input type="text" placeholder="Cidade" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />

                <input type="text" placeholder="Estado" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required />

                <input type="text" placeholder="CEP" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} required />

                <input className="inputFile" type="file" placeholder='Foto de Perfil' id='foto' value={foto} onChange={(e) => setFoto(e.target.value)} required />

                <textarea type="text" placeholder="Descreva você e sua experiência na área da saúde." id="servico" value={servico} onChange={(e) => setServico(e.target.value)} required />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormCadastro