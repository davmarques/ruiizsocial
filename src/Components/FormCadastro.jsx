import React, { useState } from "react";
import api from './api';

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
    const [foto, setFoto] = useState(null); // Estado para armazenar o arquivo de imagem
    const [servico, setServico] = useState('');
    const [estadoSigla, setEstadoSigla] = useState('');
    const [estadoExtenso, setEstadoExtenso] = useState('');

    const handleImagemChange = (event) => {
        setFoto(event.target.files[0]);
    };

    const estados = {
        AC: 'Acre',
        AL: 'Alagoas',
        AP: 'Amapá',
        AM: 'Amazonas',
        BA: 'Bahia',
        CE: 'Ceará',
        DF: 'Distrito Federal',
        ES: 'Espírito Santo',
        GO: 'Goiás',
        MA: 'Maranhão',
        MT: 'Mato Grosso',
        MS: 'Mato Grosso do Sul',
        MG: 'Minas Gerais',
        PA: 'Pará',
        PB: 'Paraíba',
        PR: 'Paraná',
        PE: 'Pernambuco',
        PI: 'Piauí',
        RJ: 'Rio de Janeiro',
        RN: 'Rio Grande do Norte',
        RS: 'Rio Grande do Sul',
        RO: 'Rondônia',
        RR: 'Roraima',
        SC: 'Santa Catarina',
        SP: 'São Paulo',
        SE: 'Sergipe',
        TO: 'Tocantins',
    };

    const buscarEndereco = async () => {
        const cepLimpo = cep.replace(/\D/g, '');
        if (cepLimpo.length !== 8) {
            alert('CEP inválido.');
            setCidade('');
            setEstadoSigla('');
            setEstadoExtenso('');
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const data = await response.json();
            if (data.erro) {
                alert('CEP não encontrado.');
                setCidade('');
                setEstadoSigla('');
                setEstadoExtenso('');
                return;
            }
            setCidade(data.localidade);
            setEstadoSigla(data.uf);
            setEstadoExtenso(estados[data.uf] || '');
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Tente novamente.');
            setCidade('');
            setEstadoSigla('');
            setEstadoExtenso('');
        }
    };
    
    const handleSubmit = async (event) => {
        console.log("Valor de nome ao submeter:", nome); // Adicione esta linha

        event.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('sobrenome', sobrenome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('especialidade', especialidade);
        formData.append('cr', cr);
        formData.append('genero', genero);
        formData.append('valor', valor);
        formData.append('publicoAlvo', publicoAlvo);
        formData.append('atendimento', atendimento);
        formData.append('cidade', cidade);
        formData.append('estado', estadoSigla); // Envia a sigla do estado para o backend
        formData.append('cep', cep);
        if (foto) {
            formData.append('foto', foto); // Anexa o arquivo de imagem ao FormData
        }
        formData.append('servico', servico);

        try {
            const response = await api.post('/profissional', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Dados enviados com sucesso!', response.data);
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
            setFoto(null);
            setServico('');
            // Limpar o formulário ou redirecionar o usuário
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            // Exibir mensagem de erro para o usuário
        }
    };

    return (
        <div className="form-cadastro" id="form-cadastro">
            <h1>Preencha seus dados e junte-se a nós!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

                <input type="text" placeholder="Sobrenome" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />

                <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input type="number" placeholder="Telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

                <select name="especialidade" id="especialidade" placeholder="Especialidade" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required>
                    <option value="" id="">Especialidade</option>
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
                    <option value="" id="">Gênero</option>
                    <option value="masculino" id="masculino">Masculino</option>
                    <option value="feminino" id="feminino">Feminino</option>
                    <option value="outros" id="outro">Outro</option>
                </select>

                <input type="valor" placeholder="Valor da Consulta" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} required />

                <select name="atendimento" id="atendimento" placeholder="Atendimento" value={atendimento} onChange={(e) => setAtendimento(e.target.value)} required>
                    <option value="" id="">Atendimento</option>
                    <option value="presencial" id="presencial">Presencial</option>
                    <option value="remoto" id="remoto">Remoto</option>
                    <option value="ambos" id="ambos">Presencial e Remoto</option>
                </select>

                <input type="text" placeholder="CEP" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={buscarEndereco} required />

                <input type="text" placeholder="Cidade" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required readOnly />

                <input type="text" placeholder="Estado" id="estado" value={estadoExtenso} readOnly />


                <input className="inputFile" type="file" accept="image/*" placeholder='Foto de Perfil' id='foto' onChange={handleImagemChange} required />

                <textarea type="text" placeholder="Descreva você e sua experiência na área da saúde." id="servico" value={servico} onChange={(e) => setServico(e.target.value)} required />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default FormCadastro;