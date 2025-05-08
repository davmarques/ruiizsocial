// FilterComponent.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Filter from '../Components/Filter';
import '../styles/index.css';
import '../styles/mediaquery.css';
import api from '../api/api';

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const FilterComponent = ({ setResultsProfissionais, setResultsEmpresas, searchType }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterOptions, setFilterOptions] = useState({
        especialidade: [
            "Acupuntura",
            "Alergia e Imunologia",
            "Anestesia",
            "Angiologia",
            "Cardiologia",
            "Cirurgia",
            "Clínica Médica",
            "Clínico Geral",
            "Coloproctologia",
            "Dermatologia",
            "Endocrinologia",
            "Endoscopia",
            "Gastroenterologia",
            "Fisioterapia",
            "Geriatria",
            "Ginecologia e Obstetrícia",
            "Hematologia e Hemoterapia",
            "Homeopatia",
            "Infectologia",
            "Mastologia",
            "Medicina do Trabalho",
            "Medicina Esportiva",
            "Medicina Intensiva",
            "Medicina Preventiva",
            "Nefrologia",
            "Neurologia",
            "Nutrição",
            "Nutrologia",
            "Oftalmologia",
            "Oncologia Clínica",
            "Ortopedia e Traumatologia",
            "Otorrinolaringologia",
            "Patologia",
            "Pediatria",
            "Pneumologia",
            "Psicologia",
            "Psiquiatria",
            "Radiologia",
            "Radioterapia",
            "Reumatologia",
            "Urologia"
        ],
        valor: [
            { label: "Até R$50", value: "0-50" },
            { label: "R$50 - R$100", value: "50-100" },
            { label: "Acima de R$100", value: "100-infinity" },
        ],
        genero: ["Masculino", "Feminino", "Outros"],
        atendimento: ["Remoto", "Presencial"],
        estado: [
            "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
            "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
            "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
            "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
            "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
        ],
    });

    const [cepFilter, setCepFilter] = useState('');

    const handleCepInputChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        setCepFilter(value);
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            if (value) {
                newParams.set('cep', value);
            } else {
                newParams.delete('cep');
            }
            return newParams;
        });
    };

    const fetchData = async (filtros) => {
        let endpoint = '';
        let setResultsFunction = null;

        if (searchType === 'profissional') {
            endpoint = 'profissional';
            setResultsFunction = setResultsProfissionais;
        } else if (searchType === 'empresa') {
            endpoint = 'empresas';
            setResultsFunction = setResultsEmpresas;
        }

        if (endpoint && setResultsFunction) {
            try {
                console.log("FilterComponent: Chamando API com filtros:", filtros);
                const data = await api.get(endpoint, filtros);
                setResultsFunction(data);
                console.log("FilterComponent: Dados recebidos da API:", data);
            } catch (error) {
                console.error(`Erro ao buscar ${searchType}`, error);
            }
        }
    };

    useEffect(() => {
        const initialFilters = Object.fromEntries(searchParams);
        fetchData(initialFilters);
    }, [searchParams, setResultsProfissionais, setResultsEmpresas, searchType]);

    const handleFilterChange = (filterName, value) => {
        const normalizedValue = value ? removerAcentos(value).toLowerCase() : '';
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            if (searchType === 'profissional') {
                if (normalizedValue) {
                    newParams.set(filterName, normalizedValue);
                } else {
                    newParams.delete(filterName);
                }
            } else if (searchType === 'empresa') {
                if (filterName === 'estado') {
                    if (normalizedValue) {
                        newParams.set(filterName, normalizedValue);
                    } else {
                        newParams.delete(filterName);
                    }
                } else if (newParams.has(filterName) && filterName !== 'estado') {
                    newParams.delete(filterName);
                }
            }
            newParams.set('searchType', searchType);
            return newParams;
        });
    };

    function formatFilterName(filterName) {
        let formattedName = filterName.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
        if (filterName === 'genero') return 'Gênero';
        if (filterName === 'valor') return 'Faixa de Preço';
        if (filterName === 'estado') return 'Localização';
        return formattedName;
    }

    return (
        <div className='filter-div'>
            {searchType === 'profissional' && (
                <>
                    <Filter key="estado" label={formatFilterName("estado")} options={filterOptions.estado} onChange={(value) => handleFilterChange("estado", value)} />
                    <Filter key="especialidade" label={formatFilterName("especialidade")} options={filterOptions.especialidade} onChange={(value) => handleFilterChange("especialidade", value)} />
                    <Filter key="atendimento" label={formatFilterName("atendimento")} options={filterOptions.atendimento} onChange={(value) => handleFilterChange("atendimento", value)} />
                    <Filter key="valor" label={formatFilterName("valor")} options={filterOptions.valor} onChange={(value) => handleFilterChange("valor", value)} />
                    <Filter key="genero" label={formatFilterName("genero")} options={filterOptions.genero} onChange={(value) => handleFilterChange("genero", value)} />

                    <div className="filter-item">
                        <label htmlFor="cepProximo">Filtrar por CEP Próximo:</label>
                        <input
                            type="number"
                            id="cepProximo"
                            value={cepFilter}
                            onChange={handleCepInputChange}
                            placeholder="Digite o CEP"
                        />
                    </div>
                </>
            )}
            {searchType === 'empresa' && (
                <Filter
                    key="estado"
                    label="Localização"
                    options={filterOptions.estado}
                    onChange={(value) => handleFilterChange("estado", value)}
                />
            )}
        </div>
    );
};

export default FilterComponent;
