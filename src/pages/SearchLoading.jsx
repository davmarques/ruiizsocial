import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const searchLoading = () => {
  const [cep, setCep] = useState("");
  const navigate = useNavigate();

  const handleCepChange = (event) => {
    const cepValue = event.target.value.replace(/\D/g, "");
    setCep(cepValue);
  };

  const handleEnviar = (e) => {
    if (cep.length === 8) {
      e.preventDefault()
      const url = `/paciente?cep=${cep}`;
      navigate(url);
    } else {
      alert("Por favor, insira um CEP válido com 8 dígitos.");
    }
  };

  return (
    <>
      <Header />
      <form className="searchCEP-form" onSubmit={handleEnviar}>
        <h1>Busque profissionais perto de você</h1>
        <input
          type="number"
          name="searchCEP"
          id="searchCEP"
          placeholder="Insira seu CEP"
          value={cep}
          onChange={handleCepChange}
        />
        <button type="submit">
          Enviar
        </button>
      </form>
      <Footer />
    </>
  );
};

export default searchLoading;
