import { Client } from 'pg';

interface DBConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

const config: DBConfig = {
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'mysecretpassword',
  database: 'socialruiiz'
};

const client = new Client(config);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Conectado ao PostgreSQL');

    // Consulta para selecionar todos os registros da tabela empresa
    const result = await client.query('SELECT * FROM empresa');
    console.log(result.rows); // Exibe os resultados no console

    // Aqui você pode adicionar outras consultas ou manipulações de dados
    // Exemplo: Inserir um novo registro
    // await client.query('INSERT INTO empresa (nome, tipo, entrega) VALUES ($1, $2, $3)', ['Empresa X', 'Loja', true]);

  } catch (error) {
    console.error('Erro de conexão', error.stack);
  } finally {
    await client.end();
  }
}

connectToDatabase();