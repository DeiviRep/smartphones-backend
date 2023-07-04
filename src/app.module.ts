import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SmartphonesModule } from './smartphones/smartphones.module';
import { Smartphone } from './smartphones/entities/smartphone.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [Smartphone],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    SmartphonesModule,
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
