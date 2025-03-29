import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'db.vrabexguxhnywkjqeiby.supabase.co',
    database: 'postgres',
    password: 'iq3Pxs9##PE7r%4',
    port: 5432,
});

export default pool;
