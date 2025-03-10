import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Filter from '../Components/Filter'
import '../styles/index.css'
import '../styles/mediaquery.css'

const FilterComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [results, setResults] = useState([])
    const [filterOptions, setFilterOptions] = useState({
        especialidade: ["Médicos", "Psicólogos", "Nutricionistas", "Fisioterapeutas"],
        publicoAlvo: ["Pediatria", "Geriatria", "Adulto"],
        faixaPreco: ["Até R$50", "R$50 - R$100", "Acima de R$100"],
        genero: ["Masculino", "Feminino"],
        atendimento: ["Online", "Presencial"],
        localizacao: ["São Paulo", "Rio de Janeiro"],
    });


    const filters = {
        especialidade: searchParams.get("especialidade") || "",
        publicoAlvo: searchParams.get("publicoAlvo") || "",
        faixaPreco: searchParams.get("faixaPreco") || "",
        genero: searchParams.get("genero") || "",
        atendimento: searchParams.get("atendimento") || "",
        localizacao: searchParams.get("localizacao") || "",
    };



    useEffect(() => {
        const profissionais = [
            {
                id: 1,
                name: "Dr. João",
                especialidade: "Médicos",
                faixaPreco: "Até R$50",
                localizacao: "São Paulo",
                atendimento: "Online",
                genero: "Masculino",
                publicoAlvo: "Pediatria"
            },
            {
                id: 2,
                name: "Dra. Maria",
                especialidade: "Psicólogos",
                faixaPreco: "R$50 - R$100",
                localizacao: "Rio de Janeiro",
                atendimento: "Presencial",
                genero: "Feminino",
                publicoAlvo: "Pediatria"
            },
            {
                id: 3,
                name: "Dr. Pedro",
                especialidade: "Nutricionistas",
                faixaPreco: "Acima de R$100",
                localizacao: "São Paulo",
                atendimento: "Online",
                genero: "Masculino",
                publicoAlvo: "Geriatria"
            },
            {
                id: 4,
                name: "Dra. Ana",
                especialidade: "Fisioterapeutas",
                faixaPreco: "R$50 - R$100",
                localizacao: "Rio de Janeiro",
                atendimento: "Online",
                genero: "Feminino",
                publicoAlvo: "Adulto"
            },
        ];

        const filteredData = profissionais.filter((prof) => {
            return Object.keys(filters).every(key => {
                return filters[key] ? prof[key] === filters[key] : true;
            });
        });

        setResults(filteredData);
    }, [searchParams]);

    const handleFilterChange = (filterName, value) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            if (value) {
                newParams.set(filterName, value);
            } else {
                newParams.delete(filterName);
            }
            return newParams;
        });

        if (!value) {
            setFilterOptions(prev => ({
                ...prev,
                [filterName]: prev[filterName]
            }));
        }
    }

    function formatFilterName(filterName) {
        
        if (filterName === 'areaAtuacao') {
            filterName = 'Área de Atuação'
        }
        
        else if (filterName === 'publicoAlvo') {
            filterName = 'Público Alvo'
        }

        else if (filterName === 'faixaPreco') {
            filterName = 'Faixa de Preço'
        }
        
        else if (filterName === 'genero') {
            filterName = 'Gênero'
        }
        
        else if (filterName === 'localizacao') {
            filterName = 'Localização'
        }

        filterName = filterName.replace(/([a-z])([A-Z])/g, '$1 $2')
        
        filterName = filterName.toLowerCase()

        filterName = filterName.charAt(0).toUpperCase() + filterName.slice(1);

        

       

        return filterName
    }

    return (
        <div className='filter-div'>
            {Object.keys(filterOptions).map(filterName => (
                <Filter
                    key={filterName}
                    label={formatFilterName(filterName)}
                    options={filterOptions[filterName]}
                    onChange={(value) => handleFilterChange(filterName, value)}
                />
            ))}

            {/* <h3>Resultados:</h3>
            <ul>
                {results.length > 0 ? (
                    results.map((item) => <li key={item.id}>{item.name}</li>)
                )

                    : (<p>Nenhum profissional encontrado.</p>
                    )}

            </ul> */}
        </div>
    )
}

export default FilterComponent