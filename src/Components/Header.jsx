import logo from '../assets/imgs/logoRuiizSocial.svg'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <Link to="/"> <img src={logo} alt="" /></Link>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/searchLoading">Sou Paciente</Link></li>
                    <li><Link to="/profissional">Sou Profissional</Link></li>
                    <li><Link to="/laboratorios">Laboratórios e Academias</Link></li>
                </ul>
            </nav>

            <button className="menu-button close-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <div className={`menu-button content-menu ${isOpen ? 'open' : ''}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/searchLoading'>Sou Paciente</Link>
                    <Link to='/profissional'>Sou Profissional</Link>
                    <Link to='/laboratorios'>Laboratórios</Link>
                </div>
            )}
        </header>
    )
}

export default Header