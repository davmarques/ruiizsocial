import React, { useEffect, useState } from "react";
import Profile from "../assets/imgs/profile.webp";
import "../styles/index.css";
import "../styles/mediaquery.css";

function substituiUnderline(texto) {
  return texto.replace(/_/g, " e ");
}

const CardProfissional = ({ profissional }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleOpenWhatApp = (prof) => {
    const phoneNumber = `55${prof.telefone}`;
    window.open(
      `https://wa.me/${phoneNumber}?text=Ol%C3%A1,%20vim%20atraves%20da%20Ruiiz%20Social!`,
      "_blank"
    );
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (!profissional) {
    return null;
  }

  const imageUrl = `http://backendruiizsocial.onrender.com/${profissional.foto}`;

  return (
    <>
      <div
        key={profissional.id}
        className={`card-component ${
          expandedId === profissional.id ? "expanded" : ""
        }`}
      >
        <div className="info-row">
          <div className="info">
            <img
              src={imageUrl}
              alt={profissional.nome}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = Profile;
              }}
            />
            <div className="info-card">
              <h1>
                {profissional.nome} {profissional.sobrenome}
              </h1>
              <h2>
                {substituiUnderline(
                  profissional.especialidade?.charAt(0).toUpperCase() +
                    profissional.especialidade?.slice(1)
                )}
              </h2>
              {profissional.cr !== "123456" && <h2>CR: {profissional.cr}</h2>}
              <h2>
                {profissional.cidade}, {profissional.estado}
              </h2>
              <h2>
                Atendimento:{" "}
                {profissional.atendimento?.charAt(0).toUpperCase() +
                  profissional.atendimento?.slice(1)}
              </h2>
            </div>
          </div>
          <div className="buttons">
            <button
              className="open-button"
              onClick={() => toggleExpand(profissional.id)}
            >
              <span
                className={`arrow ${
                  expandedId === profissional.id ? "rotated" : ""
                }`}
              >
                &#x2B9F;
              </span>
            </button>
            <div className="cta-buttons">
              {profissional.valor !== null &&
                Number(profissional.valor) !== 0 && (
                  <button className="price-button">
                    R$ {profissional.valor},00
                  </button>
                )}
              <button
                onClick={() => handleOpenWhatApp(profissional)}
                className="wwp-button"
              >
                Consultar
              </button>
            </div>
          </div>
        </div>

        {expandedId === profissional.id && (
          <div className="info-adicional">
            <h2>Sobre mim:</h2>
            <p>{profissional.servico}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CardProfissional;
