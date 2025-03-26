-- Table: public.empresa

-- DROP TABLE IF EXISTS public.empresa;

CREATE TABLE IF NOT EXISTS public.empresa
(
    id integer NOT NULL DEFAULT nextval('empresa_id_seq'::regclass),
    nome character varying(150) COLLATE pg_catalog."default" NOT NULL,
    tipo character varying(100) COLLATE pg_catalog."default" NOT NULL,
    cep character varying(10) COLLATE pg_catalog."default",
    endereco text COLLATE pg_catalog."default",
    entrega boolean NOT NULL,
    atendimento character varying(20) COLLATE pg_catalog."default",
    servicos text COLLATE pg_catalog."default",
    horario_funcionamento text COLLATE pg_catalog."default",
    telefone character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT empresa_pkey PRIMARY KEY (id),
    CONSTRAINT empresa_atendimento_check CHECK (atendimento = ANY (ARRAY['Presencial', 'Online', 'Ambos']))
);

ALTER TABLE IF EXISTS public.empresa
    OWNER to postgres;