import logo from '../assets/imgs/logoRuiizSocial.svg'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
                <img src={logo} alt="" />
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/paciente">Sou Paciente</Link></li>
                        <li><Link to="/profissional">Sou Profissional</Link></li>
                    </ul>
                </nav>
                <button className="action-btn">Agendar Consulta</button>


            <button className="menu-button close-button" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <div className={`menu-button content-menu ${isOpen ? 'open' : ''}`}>
                    <Link to='/'>Home</Link>
                    <Link to='/paciente'>Sou Paciente</Link>
                    <Link to='/profissional'>Sou Profissional</Link>
                    <button className="button">Agendar Consulta</button>
                </div>
            )}
        </header>
    )
}

export default Header