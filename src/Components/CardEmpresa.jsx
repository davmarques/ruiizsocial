import React, { useEffect, useState } from 'react';
import Profile from '../assets/imgs/profile.webp'
import api from './api'
import '../styles/index.css'
import '../styles/mediaquery.css'

const CardEmpresa = ({ empresa }) => {
    console.log("Prop EMPRESA recebida", empresa)
    const [expandedId, setExpandedId] = useState(null);

    const handleOpenWhatApp = (emp) => {
        const phoneNumber = `55${emp.telefone}`;
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (!empresa) {
        return null;
    }

    return (
        <>
            <div key={empresa.id} className={`card-component ${expandedId === empresa.id ? 'expanded' : ''}`}>
                <div className="info-row">
                    <div className="info">
                        <img src={empresa.foto || { Profile }} alt="empresa.foto" />
                        <div className="info-card">
                            <h1>{empresa.empresa}</h1>
                            <h2>{empresa.cidade}, {empresa.estado}</h2>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className='open-button' onClick={() => toggleExpand(empresa.id)} >
                            <span className={`arrow ${expandedId === empresa.id ? 'rotated' : ''}`}>&#x2B9F;</span>
                        </button>
                        <div className="cta-buttons">
                            <button onClick={() => handleOpenWhatApp(empresa)} className='wwp-button'>Consultar</button>
                        </div>
                    </div>
                </div>


                {expandedId === empresa.id && (
                    <div className="info-adicional">
                        <h2>Serviços</h2>
                        <p>{empresa.servico}</p>
                    </div>
                )}
            </div>
        </>



    )
}

export default CardEmpresa