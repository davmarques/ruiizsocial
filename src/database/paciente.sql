CREATE TABLE IF NOT EXISTS public.paciente
(
    id SERIAL PRIMARY KEY,
    nome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    senha text COLLATE pg_catalog."default" NOT NULL,
    cep character varying(10) COLLATE pg_catalog."default",
    endereco text COLLATE pg_catalog."default",
    CONSTRAINT paciente_email_key UNIQUE (email)
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.paciente
    OWNER to postgres;
