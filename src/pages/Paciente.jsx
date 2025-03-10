import '../styles/index.css'
import '../styles/mediaquery.css'	
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Filter from '../Components/Filter'
import FilterComponent from '../Components/FilterComponent'
import CardProfissional from '../Components/CardProfissional'

const Paciente = () => {
  return (
    <>
    <Header />
    <FilterComponent />
    <CardProfissional />
    <CardProfissional />
    <CardProfissional />
    <CardProfissional />
    <CardProfissional />
    <CardProfissional />
    <Footer />
    </>
  )
}

export default Paciente