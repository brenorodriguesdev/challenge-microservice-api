import pgPromise from 'pg-promise';

const pgp = pgPromise({/* Initialization Options */ });

export const postgres = pgp({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DATABASE
});