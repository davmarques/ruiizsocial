import express from "express";
import pool from "./db.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.get("/empresas", async (req, res) => {
    const { estado, especialidade, valor, genero, atendimento } = req.query;

    let query = `
        SELECT *
        FROM empresas
        WHERE TRUE
    `;
    const params = [];
    let paramIndex = 1; // Controla o índice dos parâmetros

    const removerAcentos = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    if (estado && estado !== "") {
        query += ` AND LOWER(unaccent(estado)) = LOWER(unaccent($${paramIndex}))`;
        params.push(estado);
        paramIndex++;
    }

    if (especialidade && especialidade !== "") {
        query += ` AND LOWER(unaccent(especialidade)) = LOWER(unaccent($${paramIndex}))`;
        params.push(especialidade);
        paramIndex++;
    }

    if (valor && valor !== "") {
        query += ` AND valor = $${paramIndex}`; // Mantendo como está, pois a lógica de faixa de preço pode ser mais complexa
        params.push(valor);
        paramIndex++;
    }

    if (genero && genero !== "") {
        query += ` AND LOWER(unaccent(genero)) = LOWER(unaccent($${paramIndex}))`;
        params.push(genero);
        paramIndex++;
    }

    if (atendimento && atendimento !== "") {
        query += ` AND LOWER(unaccent(atendimento)) = LOWER(unaccent($${paramIndex}))`;
        params.push(atendimento);
        paramIndex++;
    }

    try {
        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar empresas");
    }
});

app.get("/profissional", async (req, res) => {
    const { especialidade, valor, genero, atendimento, estado } = req.query;

    let query = `
        SELECT *
        FROM profissional
        WHERE TRUE
    `;
    const params = [];
    let paramIndex = 1; // Controla o índice dos parâmetros

    const removerAcentos = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    if (especialidade && especialidade !== "") {
        query += ` AND LOWER(unaccent(especialidade)) = LOWER(unaccent($${paramIndex}))`;
        params.push(especialidade);
        paramIndex++;
    }

    if (valor && valor !== "") {
        query += ` AND valor = $${paramIndex}`; // Mantendo como está, pois a lógica de faixa de preço pode ser mais complexa
        params.push(valor);
        paramIndex++;
    }

    if (genero && genero !== "") {
        query += ` AND LOWER(unaccent(genero)) = LOWER(unaccent($${paramIndex}))`;
        params.push(genero);
        paramIndex++;
    }

    if (atendimento && atendimento !== "") {
        query += ` AND LOWER(unaccent(atendimento)) = LOWER(unaccent($${paramIndex}))`;
        params.push(atendimento);
        paramIndex++;
    }

    if (estado && estado !== "") {
        query += ` AND LOWER(unaccent(estado)) = LOWER(unaccent($${paramIndex}))`;
        params.push(estado);
        paramIndex++;
    }

    try {
        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar profissionais");
    }
});

app.post("/empresas", async (req, res) => {
    try {
        const { empresa, tipo, email, telefone, foto, cidade, estado, cep, servico } = req.body;
        const result = await pool.query(
            "INSERT INTO empresas (empresa, tipo, email, telefone, foto, cidade, estado, cep,servico) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id",
            [empresa, tipo, email, telefone, foto, cidade, estado, cep, servico]
        );
        res.json(result.rows[0].id);
        console.log("Formulário de empresa enviado com sucesso!")
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao adicionar empresa");
    }
});

app.post("/profissional", async (req, res) => {
    try {
        const { nome, sobrenome, email, telefone, especialidade, cr, genero, valor, publicoAlvo, atendimento, cidade, estado, cep, foto, servico } = req.body;
        const result = await pool.query(
            "INSERT INTO profissional (nome, sobrenome, email, telefone, especialidade, cr, genero, valor, publicoAlvo, atendimento, cidade, estado, cep, foto, servico) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING id",
            [nome, sobrenome, email, telefone, especialidade, cr, genero, valor, publicoAlvo, atendimento, cidade, estado, cep, foto, servico]
        );
        res.json(result.rows[0].id);
        console.log("Formulário de profissional enviado com sucesso!")
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao adicionar profissional");
    }
});