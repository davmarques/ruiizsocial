import React, { useState } from 'react';
import api from './api'

const FormEmpresa = () => {
    const [empresa, setEmpresa] = useState('');
    const [tipo, setTipo] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [foto, setFoto] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [servico, setServico] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault

        const novaEmpresa = {
            empresa,
            tipo,
            email,
            telefone,
            foto,
            cidade,
            estado,
            cep,
            servico,
        }

        try {
            const response = await api.post('/empresas', novaEmpresa);
            console.log('Empresa adicionada com sucesso: ', response.data);
            setEmpresa('');
            setTipo('');
            setEmail('');
            setTelefone('');
            setFoto('');
            setCidade('');
            setEstado('');
            setCep('');
            setServico('');

        } catch (error) {
            console.error('Erro ao adicionar empresa: ', error);
        }
    }

    return (
        <div className="form-cadastro" id="form-cadastro">
            <h1>Preencha seus dados e junte-se a nós!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Empresa' id="empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} required />
                
                <select name="tipo" id="tipo" placeholder="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                    <option value="laboratório" id='laboratorio'>Laboratório</option>
                    <option value="academia" id='academia'>Academia</option>
                    <option value="outros" id='outro'>Outro</option>
                </select>
                
                <input type="text" placeholder="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <input type="text" placeholder="Telefone (WhatsApp)" id='telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                
                <input type="file" placeholder='Foto de Perfil' id='foto' value={foto} onChange={(e) => setFoto(e.target.value)} required/>
                
                <input type="text" placeholder="Cidade" id='cidade' value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                
                <input type="text" placeholder="Estado" id='estado' value={estado} onChange={(e) => setEstado(e.target.value)} required />
                
                <input type="text" placeholder="CEP" id='cep' value={cep} onChange={(e) => setCep(e.target.value)} required />
                
                <textarea type="text" placeholder="Descreva os serviços oferecidos." id='servico' value={servico} onChange={(e) => setServico(e.target.value)} required />
                
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default FormEmpresa
