// server.js
import express from "express";
import pool from "./db.js";
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

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
    let paramIndex = 1;

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
        query += ` AND valor = $${paramIndex}`;
        params.push(valor);
        paramIndex++;
    }

    if (genero && genero !== "") {
        query += ` AND LOWER(unaccent(genero)) = LOWER(unaccent($${paramIndex}))`;
        params.push(genero);
        paramIndex++;
    }

    if (atendimento && atendimento !== "") {
        console.log("Filtro de atendimento selecionado:", atendimento);
        if (atendimento === "ambos") {
            // Não aplica filtro
            console.log("Nenhum filtro de atendimento aplicado (Ambos selecionado).");
        } else if (atendimento === "presencial") {
            query += ` AND (LOWER(unaccent(atendimento)) = LOWER(unaccent($${paramIndex})) OR LOWER(unaccent(atendimento)) = LOWER(unaccent('ambos')))`;
            params.push(atendimento);
            paramIndex++;
            console.log("Filtro de atendimento PRESENCIAL aplicado. Consulta:", query, "Parâmetros:", params);
        } else if (atendimento === "remoto") {
            query += ` AND (LOWER(unaccent(atendimento)) = LOWER(unaccent($${paramIndex})) OR LOWER(unaccent(atendimento)) = LOWER(unaccent('ambos')))`;
            params.push(atendimento);
            paramIndex++;
            console.log("Filtro de atendimento REMOTO aplicado. Consulta:", query, "Parâmetros:", params);
        } else {
            query += ` AND LOWER(unaccent(atendimento)) = LOWER(unaccent($${paramIndex}))`;
            params.push(atendimento);
            paramIndex++;
            console.log("Outro filtro de atendimento aplicado. Consulta:", query, "Parâmetros:", params);
        }
    }

    console.log("Consulta SQL Final:", query);
    console.log("Parâmetros Finais:", params);

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
    let paramIndex = 1;

    const removerAcentos = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };


    if (genero && genero !== "") {
        query += ` AND LOWER(unaccent(genero)) = LOWER(unaccent($${paramIndex}))`;
        params.push(genero);
        paramIndex++;
    }

    if (especialidade && especialidade !== "") {
        query += ` AND LOWER(unaccent(especialidade)) = LOWER(unaccent($${paramIndex}))`;
        params.push(especialidade);
        paramIndex++;
    }

    if (valor && valor !== "") {
        const [minStr, maxStr] = valor.split('-');
        const min = parseInt(minStr);
        const max = maxStr === 'infinity' ? Infinity : parseInt(maxStr);

        if (!isNaN(min)) {
            query += ` AND valor >= $${paramIndex}`;
            params.push(min);
            paramIndex++;
        }
        if (!isNaN(max) && max !== Infinity) {
            query += ` AND valor <= $${paramIndex}`;
            params.push(max);
            paramIndex++;
        } else if (max === Infinity && !isNaN(min)) {
        }
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

app.post("/empresas", upload.single('foto'), async (req, res) => { // Adicione o middleware 'upload.single('foto')' aqui
    try {
        const { empresa, tipo, email, telefone, cidade, estado, cep, servico } = req.body;
        const fotoPath = req.file ? req.file.path : null;

        const result = await pool.query(
            "INSERT INTO empresas (empresa, tipo, email, telefone, foto, cidade, estado, cep, servico) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, foto",
            [empresa, tipo, email, telefone, fotoPath, cidade, estado, cep, servico]
        );
        res.json(result.rows[0]);
        console.log("Formulário de empresa enviado com sucesso!")
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao adicionar empresa");
    }
});

app.post("/profissional", upload.single('foto'), async (req, res) => {
    try {
        const { nome, sobrenome, email, telefone, especialidade, cr, genero, valor, publicoAlvo, atendimento, cidade, estado, cep, servico } = req.body;
        const fotoPath = req.file ? req.file.path : null;

        const result = await pool.query(
            "INSERT INTO profissional (nome, sobrenome, email, telefone, especialidade, cr, genero, valor, publicoAlvo, atendimento, cidade, estado, cep, foto, servico) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING id, foto",
            [nome, sobrenome, email, telefone, especialidade, cr, genero, valor, publicoAlvo, atendimento, cidade, estado, cep, fotoPath, servico]
        );

        res.json(result.rows[0]);
        alert("Formulário de profissional enviado com sucesso!")
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao adicionar profissional");
    }
});