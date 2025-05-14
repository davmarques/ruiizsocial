import React, { useState } from "react";
import api from "../api/api";
const FormCadastro = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [cr, setCr] = useState('');
    const [genero, setGenero] = useState('');
    const [valor, setValor] = useState('');
    const [atendimento, setAtendimento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [foto, setFoto] = useState(null);
    const [servico, setServico] = useState('');
    const [estadoExtenso, setEstadoExtenso] = useState('');
    const [fileName, setFileName] = useState("");
    const [consultaSocial, setConsultaSocial] = useState("");

    const estados = {
        AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia',
        CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás',
        MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais',
        PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí',
        RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul',
        RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo',
        SE: 'Sergipe', TO: 'Tocantins'
    };

    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        setFoto(file);
        setFileName(file ? file.name : "")
    };

    const handleCepChange = (event) => {
        const newCep = event.target.value.replace(/\D/g, '');
        setCep(newCep);
    };

    const buscarEndereco = async () => {
        const cepLimpo = cep.replace(/\D/g, '');
        if (cepLimpo.length !== 8) {
            alert('CEP inválido.');
            setCidade('');
            setEstado('');
            setEstadoExtenso('');
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const data = await response.json();
            if (data.erro) {
                alert('CEP não encontrado.');
                setCidade('');
                setEstado('');
                setEstadoExtenso('');
                return;
            }
            setCidade(data.localidade);
            setEstado(data.uf); // Atualiza o estado com a sigla
            setEstadoExtenso(estados[data.uf] || '');
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Tente novamente.');
            setCidade('');
            setEstado('');
            setEstadoExtenso('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isLoading) return; // Impede envio duplo

        setIsLoading(true); // Começa o carregamento

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('sobrenome', sobrenome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('especialidade', especialidade);
        formData.append('cr', cr);
        formData.append('genero', genero);
        formData.append('valor', valor);
        formData.append('atendimento', atendimento);
        formData.append('cidade', cidade);
        formData.append('estado', estado); // Envia a sigla do estado
        formData.append('cep', cep);
        if (foto) {
            formData.append('foto', foto);
        }
        formData.append('servico', servico);

        try {
            const response = await api.postProfissional(formData);

            if (response.ok) {
                console.log("Cadastro realizado com sucesso:", await response.json());
                alert("Cadastro enviado com sucesso!");
                setNome('');
                setSobrenome('');
                setEmail('');
                setTelefone('');
                setEspecialidade('');
                setCr('');
                setGenero('');
                setValor('');
                setAtendimento('');
                setCidade('');
                setEstado('');
                setCep('');
                setFoto(null);
                setServico('');
                setEstadoExtenso('');
            } else {
                console.error("Erro ao enviar cadastro:", response.statusText);
                alert("Erro ao enviar cadastro.");
            }
        } catch (error) {
            console.error("Erro no envio:", error);
        } finally {
            setIsLoading(false); // Finaliza carregamento
        }
    };

    return (
        <div className="form-cadastro" id="form-cadastro">
            <h1>Preencha seus dados e junte-se a nós!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="number" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

                <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required>
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

                <input type="number" placeholder="C.R." value={cr} onChange={(e) => setCr(e.target.value)} required />

                <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
                    <option value="">Gênero</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outros">Outro</option>
                </select>

                <div className="consultaSocial">
                    <p>Realiza consulta social?</p>
                    <div className="consultaSocial-item">
                        <label htmlFor="consultaSocial">Sim</label>
                        <input type="radio" name="consultaSocial" id="consultaSocial-sim" value="sim" checked={consultaSocial === "sim"} onChange={(e) => setConsultaSocial(e.target.value)} />
                        <label htmlFor="consultaSocial">Não</label>
                        <input type="radio" name="consultaSocial" id="consultaSocial-nao" value="nao" checked={consultaSocial === "nao"}
                            onChange={(e) => {
                                setConsultaSocial(e.target.value);
                                setValor("");
                            }
                            } />
                    </div>
                </div>


                <input type="text" placeholder="Valor da Consulta" value={valor} onChange={(e) => setValor(e.target.value)} disabled={consultaSocial === "nao"} required={consultaSocial === "sim"} />

                <select value={atendimento} onChange={(e) => setAtendimento(e.target.value)} required>
                    <option value="">Atendimento</option>
                    <option value="presencial">Presencial</option>
                    <option value="remoto">Remoto</option>
                    <option value="ambos">Presencial e Remoto</option>
                </select>

                <input type="text" placeholder="CEP" value={cep} onChange={handleCepChange} onBlur={buscarEndereco} required />
                <input type="text" placeholder="Cidade" value={cidade} readOnly />
                <input type="text" placeholder="Estado" value={estadoExtenso} readOnly />

                <div className="inputFile">
                    <label htmlFor="foto" className="custom-inputFile">{fileName ? `${fileName}` : "Selecione sua foto de perfil"}</label>
                    <input id="foto" className="inputFileItem" type="file" accept="image/*" onChange={handleImagemChange} />
                </div>


                <textarea placeholder="Descreva você e sua experiência" value={servico} onChange={(e) => setServico(e.target.value)} required />

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Enviando" : "Cadastrar"}
                </button>
            </form>
        </div>
    );
};
export default FormCadastro;