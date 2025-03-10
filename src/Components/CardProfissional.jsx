import React, { useState } from 'react';
import Profile from '../assets/imgs/profile.webp'

const CardProfissional = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`card-component ${expanded ? 'expanded' : ''}`}>
            <div className="info-row">
                <div className="info">
                    <img src={Profile} alt="" />
                    <div className="info-card">
                        <h1>Nome Completo</h1>
                        <h2>Especialidade</h2>
                        <h2>CR</h2>
                        <h2>Público-Alvo</h2>
                    </div>
                </div>
                <div className="buttons">
                    <button className='open-button' onClick={toggleExpand} >
                        <span className={`arrow ${expanded ? 'rotated' : ''}`}>&#x2B9F;</span>
                    </button>
                    <div className="cta-buttons">
                        <button className='price-button'>R$100,00</button>
                        <button className='wwp-button'>Consultar</button>
                    </div>
                </div>
            </div>


            {expanded && (
                <div className="info-adicional">
                    <h2>Sobre mim:</h2>
                    <p>O consultório estava cheio, como de costume. Pacientes de todas as idades e origens aguardavam ansiosamente para compartilhar suas histórias e queixas. Dona Maria, com seu sorriso gentil e olhar preocupado, falou sobre suas dores nas costas, enquanto Seu João, um senhor de cabelos brancos, descreveu seus problemas de sono. Cada paciente era único, com suas próprias necessidades e preocupações. O médico ouvia atentamente, buscando entender não apenas os sintomas, mas também o contexto de vida de cada um. Era um trabalho desafiador, mas gratificante. Ajudar as pessoas a encontrar alívio para seus sofrimentos e promover a saúde era a missão que o motivava a seguir em frente, todos os dias.</p>
                </div>
            )}
        </div>
    )
}

export default CardProfissional