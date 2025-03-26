-- Table: public.profissional

-- DROP TABLE IF EXISTS public.profissional;

CREATE TABLE IF NOT EXISTS public.profissional
(
    id integer NOT NULL DEFAULT nextval('profissional_id_seq'::regclass),
    foto bytea,
    nome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    sobrenome character varying(100) COLLATE pg_catalog."default" NOT NULL,
    telefone character varying(20) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    cr character varying(50) COLLATE pg_catalog."default" NOT NULL,
    especialidade character varying(100) COLLATE pg_catalog."default" NOT NULL,
    genero character varying(20) COLLATE pg_catalog."default",
    area_atuacao text COLLATE pg_catalog."default",
    publico_alvo text COLLATE pg_catalog."default",
    valor numeric(10,2),
    experiencia text COLLATE pg_catalog."default",
    atendimento character varying(20) COLLATE pg_catalog."default",
    cep character varying(10) COLLATE pg_catalog."default",
    endereco text COLLATE pg_catalog."default",
    CONSTRAINT profissional_pkey PRIMARY KEY (id),
    CONSTRAINT profissional_cr_key UNIQUE (cr),
    CONSTRAINT profissional_email_key UNIQUE (email),
    CONSTRAINT profissional_atendimento_check CHECK (atendimento::text = ANY (ARRAY['Presencial'::character varying, 'Online'::character varying, 'Ambos'::character varying]::text[]))
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.profissional
    OWNER to postgres;