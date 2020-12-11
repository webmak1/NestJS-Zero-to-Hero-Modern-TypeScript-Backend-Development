import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-3-222-150-253.compute-1.amazonaws.com',
  port: 5432,
  username: 'rdhmdlwlkxscqo',
  password: '2d5995d7b59fb087b27d4689717bdb5f001cbc69ac9e0ea2a4c4bb16233578d6',
  database: 'd1o1fei54umt0b',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
