import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import configuration from 'config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Ensure ConfigModule is imported
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('database.host'), 
        port: config.get<number>('database.port'),
        username: config.get<string>('database.username'),
        password: config.get<string>('database.password'),
        database: config.get<string>('database.name'),
        entities: config.get<string[]>('database.entities'),
        synchronize: config.get<boolean>('database.synchronize'),
        logging: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
})
export class AppModule {}
