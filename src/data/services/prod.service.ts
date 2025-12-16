// prod.service.ts
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class ProdService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL, // sua URL do PostgreSQL
      ssl: false,                    // <--- DESABILITA SSL
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
