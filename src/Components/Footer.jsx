import logo from '../assets/imgs/logoRuiizSocial.svg'
import whatsapp from '../assets/imgs/whatsapp.png'
import instagram from '../assets/imgs/instagram.png'
import email from '../assets/imgs/email.png'
import { Link } from "react-router-dom"



const Footer = () => {
    return (
        <footer>
            <div className="first-line">
                <img src={logo} alt="" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/paciente">Sou Paciente</Link></li>
                    <li><Link to="/profissional">Sou Profissional</Link></li>
                    <li><Link to="/laboratorios">Laboratórios e Academias</Link></li>
                </ul>
                <ul className='icon-links'>
                    <a href="https://wa.me/5514997852067?text=Olá,%20gostaria%20de%20mais%20informações%20a%20respeito%20do%20projeto%20RuiizSocial." target='_blank'><img src={whatsapp} alt="" /></a>
                    <a href="https://www.instagram.com/ruiizsocial" target='_blank'><img src={instagram} alt="" /></a>
                    <a href="mailto:Augusto2162@icloud.com?text=Olá,%20gostaria%20de%20mais%20informações%20a%20respeito%20do%20projeto%20RuiizSocial." target='_blank'><img src={email} alt="" /></a>
                </ul>
            </div>
            <p><a href="#">©Storms Development.</a>  Todos os direitos reservados.</p>

        </footer>
    )
}

export default Footer