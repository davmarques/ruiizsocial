import React, { useState } from 'react';
import api from '../api/api'; // Se você já está usando esse arquivo para sua API, não precisa alterar

const FormEmpresa = () => {
    const [empresa, setEmpresa] = useState('');
    const [tipo, setTipo] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [foto, setFoto] = useState(null);
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
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

    const buscarEndereco = async (cepDigitado) => {
        const cepLimpo = cepDigitado.replace(/\D/g, '');
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
        event.preventDefault();

        const formData = new FormData();
        formData.append('empresa', empresa);
        formData.append('tipo', tipo);
        formData.append('email', email);
        formData.append('telefone', telefone);
        if (foto) {
            formData.append('foto', foto);
        }
        formData.append('cidade', cidade);
        formData.append('estado', estadoSigla);
        formData.append('cep', cep);
        formData.append('servico', servico);

        try {
            // Atualize a URL para o endpoint correto da sua nova API
            const response = await api.post('/empresas/cadastrar', formData, { // Novo endpoint
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Empresa cadastrada com sucesso: ', response.data);
            setEmpresa('');
            setTipo('');
            setEmail('');
            setTelefone('');
            setFoto(null);
            setCidade('');
            setEstadoSigla('');
            setEstadoExtenso('');
            setCep('');
            setServico('');
        } catch (error) {
            console.error('Erro ao cadastrar empresa: ', error);
        }
    };

    return (
        <div className="form-cadastro" id="form-cadastro">
            <h1>Preencha seus dados e junte-se a nós!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Empresa' id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} required />

                <select name="tipo" id="tipo" placeholder="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                    <option value="" id=''>Tipo</option>
                    <option value="laboratório" id='laboratorio'>Laboratório</option>
                    <option value="academia" id='academia'>Academia</option>
                    <option value="outros" id='outro'>Outro</option>
                </select>

                <input type="text" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                <input type="text" placeholder="Telefone (WhatsApp)" id='telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} required />

                <input type="file" placeholder='Foto de Perfil' id='foto' accept="image/*" onChange={handleImagemChange} required />

                <input type="text" placeholder="CEP" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={(e) => buscarEndereco(e.target.value)} required />

                <input type="text" placeholder="Cidade" id='cidade' value={cidade} onChange={(e) => setCidade(e.target.value)} required readOnly />

                <input type="text" placeholder="Estado" id='estado' value={estadoExtenso} readOnly />

                <textarea type="text" placeholder="Descreva os serviços oferecidos." id='servico' value={servico} onChange={(e) => setServico(e.target.value)} required />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default FormEmpresa;
