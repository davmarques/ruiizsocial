const BASE_URL = "https://backendruiizsocial.onrender.com";

const get = async (endpoint, filtros = {}) => {
    try {
        const queryString = new URLSearchParams(filtros).toString();
        const res = await fetch(`${BASE_URL}/${endpoint}?${queryString}`);
        if (!res.ok) throw new Error(`Erro ao buscar ${endpoint}`);
        return await res.json();
    } catch (error) {
        console.error(`Erro em api.get (${endpoint}):`, error);
        return [];
    }
};

const getEmpresas = async (filtros) => get("empresas", filtros);

const getProfissionais = async (filtros) => {
    // Lógica de tratamento do filtro de CEP próximo será feita no backend
    return get("profissional", filtros);
};

const postEmpresa = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/empresas`, {
            method: "POST",
            body: formData,
        });
        if (!res.ok) throw new Error("Erro ao cadastrar empresa");
        return await res.json();
    } catch (error) {
        console.error("Erro em postEmpresa:", error);
        return null;
    }
};

const postProfissional = async (formData) => {
    try {
        const res = await fetch(`${BASE_URL}/profissional`, {
            method: "POST",
            body: formData,
        });
        if (!res.ok) throw new Error("Erro ao cadastrar profissional");
        return await res.json();
    } catch (error) {
        console.error("Erro em postProfissional:", error);
        return null;
    }
};

const api = {
    get,
    getEmpresas,
    getProfissionais,
    postEmpresa,
    postProfissional,
};

export default api;