import '../styles/index.css'
import '../styles/mediaquery.css'
import profissional5 from '../assets/imgs/profissional5.svg'
import laboratory from '../assets/imgs/laboratory.jpg'
import doctorIpad from '../assets/imgs/doctor-ipad.jpg'
import pacienteImg from '../assets/imgs/paciente.jpg'
import quality from '../assets/imgs/quality.jpg'
import circle from '../assets/imgs/wheel.svg'


const LaboratoriosMain = () => {
    return (
        <main>
            <div className="hero-profissional">
                <img src={laboratory} alt="" />
                <div className="hp-content">
                    <h1>Traga seu laboratório para a Ruiiz Social!</h1>
                    <p>Conecte-se a milhares de pacientes e amplie seu alcance no mercado da saúde digital.</p>
                    <a href="#form-cadastro">Cadastre seu laboratório</a>
                </div>
            </div>

            <div className="atender-div">
                <h1>Por que cadastrar seu laboratório na Ruiiz Social?</h1>
                <div className="item-grid">
                    <div className="atender-item">
                        <img src={pacienteImg} alt="" />
                        <p>Acesse uma base crescente de pacientes em busca de exames acessíveis e de qualidade.</p>
                    </div>
                    <div className="atender-item">
                        <img src={doctorIpad} alt="" />
                        <p>Receba solicitações diretamente pelo WhatsApp e agilize o agendamento dos exames.</p>
                    </div>
                    <div className="atender-item">
                        <img src={profissional5} alt="" />
                        <p>Expanda seus serviços para pacientes de diferentes localidades, sem limitações geográficas.</p>
                    </div>
                    <div className="atender-item">
                        <img src={quality} alt="" />
                        <p>Utilize uma plataforma segura, confiável e especializada na área da saúde.</p>
                    </div>
                </div>

                <h2>Seu laboratório define os horários de atendimento e os valores dos exames, garantindo acessibilidade e praticidade para todos.</h2>
                <a href="#form-cadastro">Quero cadastrar meu laboratório</a>
            </div>

            <div className="como-funciona-profissional">
                <img src={circle} alt="" />
                <h1>Como funciona?</h1>
                <div className="item">
                    <h1>1</h1>
                    <p>Os pacientes acessam seu perfil e entram em contato diretamente pelo WhatsApp para agendar exames.</p>
                </div>
                <div className="item">
                    <h1>2</h1>
                    <p>Os preços dos exames são definidos por você, garantindo flexibilidade e autonomia nos atendimentos.</p>
                </div>
                <div className="item">
                    <h1>3</h1>
                    <p>No horário agendado, realize o atendimento presencial ou digital conforme sua estrutura.</p>
                </div>
                <a href="#form-cadastro">Cadastre seu laboratório</a>
            </div>

            <div className="fazerparte-div">
                <h1>Como fazer parte?</h1>
                <div className="item">
                    <h1>1</h1>
                    <p>Preencha o formulário com os dados do seu laboratório.</p>
                </div>
                <div className="item">
                    <h1>2</h1>
                    <p>Aguarde nosso contato para validação do cadastro e integração à plataforma.</p>
                </div>
                <div className="item">
                    <h1>3</h1>
                    <p>Após a aprovação, seu laboratório estará visível para milhares de pacientes em poucos minutos.</p>
                </div>
                <a href="#form-cadastro">Cadastre-se agora</a>
            </div>
        </main>

    )
}

export default LaboratoriosMain