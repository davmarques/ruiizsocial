import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Filter from '../Components/Filter'
import '../styles/index.css'
import '../styles/mediaquery.css'
import api from './api'

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const FilterComponent = ({ setResultsProfissionais, setResultsEmpresas, searchType }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterOptions, setFilterOptions] = useState({
        especialidade: [
            "Acupuntura",
            "Alergia e Imunologia",
            "Anestesia",
            "Angiologia",
            "Cardiologia",
            "Cirurgia",
            "Clínica Médica",
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
        valor: ["Até R$50", "R$50 - R$100", "Acima de R$100"],
        genero: ["Masculino", "Feminino", "Outros"],
        atendimento: ["Remoto", "Presencial", "Ambos"],
        estado: [
            "Acre",
            "Alagoas",
            "Amapá",
            "Amazonas",
            "Bahia",
            "Ceará",
            "Distrito Federal",
            "Espírito Santo",
            "Goiás",
            "Maranhão",
            "Mato Grosso",
            "Mato Grosso do Sul",
            "Minas Gerais",
            "Pará",
            "Paraíba",
            "Paraná",
            "Pernambuco",
            "Piauí",
            "Rio de Janeiro",
            "Rio Grande do Norte",
            "Rio Grande do Sul",
            "Rondônia",
            "Roraima",
            "Santa Catarina",
            "São Paulo",
            "Sergipe",
            "Tocantins"
        ],
    });


    // const filters = {
    //     especialidade: searchParams.get("especialidade") || "",
    //     faixaPreco: searchParams.get("valor") || "",
    //     genero: searchParams.get("genero") || "",
    //     atendimento: searchParams.get("atendimento") || "",
    //     localizacao: searchParams.get("estado") || "",
    // };



    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = '';
            let setResultsFunction = null;
            if (searchType === 'profissional') {
                apiUrl = '/profissional';
                setResultsFunction = setResultsProfissionais;
            } else if (searchType === 'empresa') {
                apiUrl = '/empresas';
                setResultsFunction = setResultsEmpresas;
            }

            if (apiUrl && setResultsFunction) {
                try {
                    const { data } = await api.get(apiUrl, { params: Object.fromEntries(searchParams) });
                    setResultsFunction(data);
                } catch (error) {
                    console.error(`Erro ao buscar ${searchType}`, error);
                }
            }
        };
        fetchData();
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
    }

    function formatFilterName(filterName) {
        let formattedName = filterName.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
        if (filterName === 'valor') return 'Faixa de Preço';
        if (filterName === 'estado') return 'Localização';
        return formattedName;
    }

    return (
        <div className='filter-div'>
            {searchType === 'profissional' && (
                <>
                    <Filter key="especialidade" label={formatFilterName("especialidade")} options={filterOptions.especialidade} onChange={(value) => handleFilterChange("especialidade", value)} />
                    <Filter key="valor" label={formatFilterName("valor")} options={filterOptions.valor} onChange={(value) => handleFilterChange("valor", value)} />
                    <Filter key="genero" label={formatFilterName("genero")} options={filterOptions.genero} onChange={(value) => handleFilterChange("genero", value)} />
                    <Filter key="atendimento" label={formatFilterName("atendimento")} options={filterOptions.atendimento} onChange={(value) => handleFilterChange("atendimento", value)} />
                    <Filter key="estado" label={formatFilterName("estado")} options={filterOptions.estado} onChange={(value) => handleFilterChange("estado", value)} />
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
}

export default FilterComponent