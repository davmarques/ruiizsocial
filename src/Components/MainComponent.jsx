import mainImg from '../assets/imgs/home-img.png'
import stethoscope from '../assets/imgs/stethoscope.svg'
import cardiology from '../assets/imgs/cardiology.svg'
import calendar from '../assets/imgs/calendar.svg'
import circle from '../assets/imgs/wheel.svg'
import home1 from '../assets/imgs/home1.svg'
import home2 from '../assets/imgs/home2.svg'
import home3 from '../assets/imgs/home3.svg'
import home4 from '../assets/imgs/home4.svg'
import home5 from '../assets/imgs/home5.svg'
import home6 from '../assets/imgs/home6.svg'
import { Link } from "react-router-dom"


const MainComponent = () => {
    return (
        <>
            <div className="main-component">
                <div>
                    <h1>Saúde acessível e conectada para todos</h1>
                    <p>Cuide da sua saúde onde estiver. Agende sua consulta online com os médicos, psicólogos e outros especialistas.</p>
                    <Link to="/paciente"><button>Agendar Consulta</button></Link>
                </div>
                <img src={mainImg} alt="" />
            </div>

            <div className="main-table">
                <div className="item-table">
                    <img src={stethoscope} alt="" />
                    <h3>Profissionais Qualificados</h3>
                    <p>Médicos, psicólogos e especialistas a seu alcance.</p>
                </div>
                <div className="item-table">
                    <img src={cardiology} alt="" />
                    <h3>Saúde Acessível</h3>
                    <p>Consultas online com preço justo para todos.</p>
                </div>
                <div className="item-table">
                    <img src={calendar} alt="" />
                    <h3>Agendamento Fácil</h3>
                    <p>Escolha um profissional e marque sua consulta em minutos.</p>
                </div>
            </div>

            <div className='circle-section'>
                <img src={circle} alt="" />
                <div>
                    <p>Conectamos você à saúde, de forma fácil e acessível.
                    </p>
                    <p>Na <strong>Ruiiz Social</strong>, você encontra profissionais de saúde qualificados, e etc, prontos para atender online e <strong>cuidar da sua saúde</strong>.</p>
                </div>
            </div>

            <div className='grid'>
                <h1 className='grid-h1'>Vantagens de escolher uma consulta online pela RuizHealth Social</h1>
                <div className="grid-templates">
                    <div className="templates">
                        <div className="reverse template-div">
                            <div className="text-template ">
                                <h1>Busca Inteligente:</h1>
                                <p>Encontre o profissional ideal para você! <br /> Busque por especialidade, área de atuação, público-alvo, faixa de preço e gênero.</p>
                            </div>
                            <div className="grid-imgs">
                                <img src={home1} alt="" />
                            </div>
                        </div>


                        <div className="template-div">
                            <div className="grid-imgs">
                                <img src={home2} alt="" />
                            </div>
                            <div className="text-template">
                                <h1>Perfis Completos:</h1>
                                <p>Conheça os profissionais! Acesse seus perfis com informações sobre formação, registro profissional (CRM, CRP, CRN, Crefito, etc.), especialidades, foto, e-mail e WhatsApp.</p>
                            </div>
                        </div>

                        <div className="template-div reverse">
                            <div className="text-template">
                                <h1>Contato Direto:</h1>
                                <p>Fale com o profissional! Entre em contato via WhatsApp e tire suas dúvidas antes de agendar sua consulta.</p>
                            </div>
                            <div className="grid-imgs">
                                <img src={home3} alt="" />
                            </div>
                        </div>

                        <div className="template-div">
                            <div className="grid-imgs">
                                <img src={home4} alt="" />
                            </div>
                            <div className="text-template">
                                <h1>Avaliações Confiáveis:</h1>
                                <p>Veja o que os pacientes dizem! Avalie os profissionais com estrelas e comentários, e ajude outros pacientes a encontrarem o melhor cuidado.</p>
                            </div>
                        </div>

                        <div className="template-div reverse">
                            <div className="text-template">
                                <h1>Segurança e Privacidade:</h1>
                                <p>Seus dados estão protegidos! Utilizamos medidas de segurança robustas, incluindo criptografia de dados e conformidade com a LGPD, para garantir a segurança das suas informações.</p>
                            </div>
                            <div className="grid-imgs">
                                <img src={home5} alt="" />
                            </div>
                        </div>

                        <div className="template-div">
                            <div className="grid-imgs">
                                <img src={home6} alt="" />
                            </div>
                            <div className="text-template">
                                <h1>Praticidade e Acessibilidade:</h1>
                                <p>Consultas online no seu tempo! Agende suas consultas diretamente com o profissional, de forma prática e acessível, com valores entre R$45 e R$100 por sessão.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta-section">
                <h1>RuizHealth Social: Sua saúde em primeiro lugar!</h1>
                <Link to="/paciente"><button>Consulte um profissional de saúde agora</button></Link>
            </div>

            <div className="how-it-works">
                <h1 className='hiw-h1'>Como funciona?</h1>
                <div className="content-area">
                    <div className="content">
                        <h1 className='index-content'>1</h1>
                        <h2>Cadastro</h2>
                        <p>Crie sua conta gratuitamente em poucos minutos.</p>
                    </div>
                    <div className="content">
                        <h1 className='index-content'>2</h1>
                        <h2>Agendamento</h2>
                        <p>Seleção de data e horário para a especialidade desejada.</p>
                    </div>
                    <div className="content">
                        <h1 className='index-content'>3</h1>
                        <h2>Consulta Online</h2>
                        <p>Pronto, agora é só aguardar um profissional da saúde para o início da consulta.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainComponent