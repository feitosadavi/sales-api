import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres', // bolar uma estrategia para rodar as migrations sem precisar modificar isto!!!
  host: 'localhost', // if using docker, needs to be the container name
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'sales-api_db',
  synchronize: true,
  logging: true,
  entities: ['./src/infra/repos/postgres/entities/*.entity.ts'],
  subscribers: [],
  migrations: [
    './src/infra/repos/postgres/migrations/*.ts',
  ],
});

export default AppDataSource;
