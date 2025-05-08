import '../styles/index.css'
import '../styles/mediaquery.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FilterComponent from '../Components/FilterComponent'
import CardProfissional from '../Components/CardProfissional'
import CardEmpresa from '../Components/CardEmpresa'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from '../api/api'

const Paciente = () => {

  const [profissionais, setProfissionais] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const [resultsProfissionais, setResultsProfissionais] = useState([]);
  const [resultsEmpresas, setResultsEmpresas] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const profData = await api.get('profissional');
        setProfissionais(profData);

        const empData = await api.get('empresas');
        setEmpresas(empData);
      } catch (error) {
        console.error('Erro ao buscar dados iniciais', error);
      }
    };

    fetchInitialData();
  }, []);

  // Determine if there are any filters applied for professionals or empresas
  const hasProfissionalFilters = Array.from(searchParams.keys()).some(key => key !== 'estado');
  const hasEmpresaFilter = searchParams.has('estado');

  // Determine which data to render based on whether filters are applied
  const profissionaisParaRenderizar = hasProfissionalFilters ? resultsProfissionais : profissionais;
  const empresasParaRenderizar = hasEmpresaFilter ? resultsEmpresas : empresas;

  return (
    <>
      <Header />
      <FilterComponent setResultsProfissionais={setResultsProfissionais} setResultsEmpresas={setResultsEmpresas} searchType="profissional" />
      <div className="results-container">
        <h2 className='results-h2'>Profissionais</h2>
        {console.log("Profissionais para renderizar: ", profissionaisParaRenderizar)
        }        {profissionaisParaRenderizar.length > 0 ? (
          <ul>
            {profissionaisParaRenderizar.map((profissional) => (
              <li key={profissional.id}>
                <CardProfissional profissional={profissional} />
              </li>
            ))}
          </ul>
        ) : (
          <p className='results-p'>{hasProfissionalFilters ? 'Nenhum profissional encontrado com os filtros aplicados.' : 'Nenhum profissional encontrado.'}</p>
        )}

        <h2 className='results-h2'>Empresas</h2>
        {empresasParaRenderizar.length > 0 ? (
          <ul>
            {empresasParaRenderizar.map((empresa) => (
              <li key={empresa.id}>
                <CardEmpresa empresa={empresa} />
              </li>
            ))}
          </ul>
        ) : (
          <p className='results-p'>{hasEmpresaFilter ? 'Nenhuma empresa encontrada com os filtros aplicados.' : 'Nenhuma empresa encontrada.'}</p>
        )}
      </div>

      <Footer />
    </>
  )
}

export default Paciente