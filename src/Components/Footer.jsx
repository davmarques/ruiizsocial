import logo from '../assets/imgs/logoRuiizSocial.svg'
import whatsapp from '../assets/imgs/whatsapp.png'
import instagram from '../assets/imgs/instagram.png'
import email from '../assets/imgs/email.png'


const Footer = () => {
    return (
        <footer>
            <div className="first-line">
                <img src={logo} alt="" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sou Paciente</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                </ul>
                <ul className='icon-links'>
                    <a href="#"><img src={whatsapp} alt="" /></a>
                    <a href="#"><img src={instagram} alt="" /></a>
                    <a href="#"><img src={email} alt="" /></a>
                </ul>
            </div>
            <p><a href="#">©Storms Development.</a>  Todos os direitos reservados.</p>

        </footer>
    )
}

export default Footer