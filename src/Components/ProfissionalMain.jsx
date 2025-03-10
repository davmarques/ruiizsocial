import '../styles/index.css'
import '../styles/mediaquery.css'
import profissional1 from '../assets/imgs/profissional1.svg'
import profissional2 from '../assets/imgs/profissional2.svg'
import profissional3 from '../assets/imgs/profissional3.svg'
import profissional4 from '../assets/imgs/profissional4.svg'
import profissional5 from '../assets/imgs/profissional5.svg'
import profissional6 from '../assets/imgs/profissional6.svg'
import circle from '../assets/imgs/wheel.svg'



const ProfissionalMain = () => {
    return (
        <main>
            <div className="hero-profissional">
                <img src={profissional1} alt="" />
                <div className="hp-content">
                    <h1>Junte-se à Ruiiz Social hoje mesmo!</h1>
                    <p>Venha fazer parte do serviço de atendimento social online!</p>
                    <button>Inscrever-se</button>
                </div>
            </div>
            
            <div className="atender-div">
                <h1>Por que atender na Ruiiz Social?</h1>
                <div className="item-grid">
                <div className="atender-item">
                    <img src={profissional3} alt="" />
                    <p>Acesse milhares de pacientes buscando atendimento acessível</p>
                </div>
                <div className="atender-item">
                    <img src={profissional4} alt="" />
                    <p>Receba seu pagamento de forma prática e segura</p>
                </div>
                <div className="atender-item">
                    <img src={profissional5} alt="" />
                    <p>Atenda pacientes de qualquer lugar do Brasil</p>
                </div>
                <div className="atender-item">
                    <img src={profissional6} alt="" />
                    <p>Plataforma confiável e especializada na área da saúde</p>
                </div>
                </div>
             
                <h2>Você tem autonomia para definir sua agenda e personalizar o atendimento aos seus pacientes, com valores acessíveis para todos.</h2>
                <button>Quero atender na Ruiiz Social</button>
            </div>

            <div className="como-funciona-profissional">
                <img src={circle} alt="" />
                <h1>Como funciona?</h1>
                <div className="item">
                    <h1>1</h1>
                    <p>Os usuários entram em contato através do seu WhatsApp, que ficará disponível no seu perfil</p>
                </div>
                <div className="item">
                    <h1>2</h1>
                    <p>Os atendimentos individuais custam entre R$45,00 e R$100,00, mas todos os outros detalhes podem ser combinados entre você e o paciente!</p>
                </div>
                <div className="item">
                    <h1>3</h1>
                    <p>No horário combinado, realize o atendimento através do aplicativo a sua escolha.</p>
                </div>
                <button>Cadastre-se</button>
            </div>

            <div className="fazerparte-div">
                <h1>Como fazer parte?</h1>
                <div className="item">
                    <h1>1</h1>
                    <p>Envie suas informações pelo formulário abaixo.</p>
                </div>
                <div className="item">
                    <h1>2</h1>
                    <p>Aguarde nosso contato para finalizar o cadastro.</p>
                </div>
                <div className="item">
                    <h1>3</h1>
                    <p>Assim que o cadastro estiver concluído e verificado, colocamos seu perfil no ar em minutos.</p>
                </div>
                <button>Cadastre-se</button>
                <img src={circle} alt="" />
            </div>
        </main>
    )
}

export default ProfissionalMain