import React, { useState } from 'react';
import Profile from '../assets/imgs/profile.webp';
import '../styles/index.css';
import '../styles/mediaquery.css';

function substituiUnderline(texto) {
    return texto.replace(/_/g, " e ");
}

const CardEmpresa = ({ empresa }) => {
    console.log("Prop EMPRESA recebida", empresa);
    const [expandedId, setExpandedId] = useState(null);

    const handleOpenWhatApp = (emp) => {
        const phoneNumber = `55${emp.telefone}`;
        window.open(`https://wa.me/${phoneNumber}?text=Ol%C3%A1,%20vim%20atraves%20da%20Ruiiz%20Social!`, "_blank");
    }

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (!empresa) {
        return null;
    }

    // Determine a URL da imagem (use uma imagem padrão para empresas)
    const imageUrl = empresa.foto ? `http://backendruiizsocial.onrender.com/${empresa.foto}` : Profile;

    return (
        <>
            <div key={empresa.id} className={`card-component ${expandedId === empresa.id ? 'expanded' : ''}`}>
                <div className="info-row">
                    <div className="info">
                        <img src={imageUrl} alt={empresa.empresa} onError={(e) => { e.target.onerror = null; e.target.src = CompanyLogo }} />
                        <div className="info-card">
                            <h1>{empresa.empresa}</h1>
                            <h2>{substituiUnderline(empresa.tipo?.charAt(0).toUpperCase() + empresa.tipo?.slice(1))}</h2>
                            <h2>{empresa.cidade}, {empresa.estado}</h2>
                        </div>
                    </div>
                    <div className="buttons empresa-buttons">
                        <button className='open-button' onClick={() => toggleExpand(empresa.id)} >
                            <span className={`arrow ${expandedId === empresa.id ? 'rotated' : ''}`}>&#x2B9F;</span>
                        </button>
                        <div className="cta-buttons empresa-button">
                            <button onClick={() => handleOpenWhatApp(empresa)} className='wwp-button'>Consultar</button>
                        </div>
                    </div>
                </div>

                {expandedId === empresa.id && (
                    <div className="info-adicional">
                        <h2>Serviços:</h2>
                        <p>{empresa.servico}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default CardEmpresa;