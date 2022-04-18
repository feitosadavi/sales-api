import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres', // if using docker, needs to be the container name
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'sales-api_db',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
