import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmartphonesModule } from './smartphones/smartphones.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8888,
      username: 'postgres',
      password: 'root',
      database: 'smartphones',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 100,
    }),
    SmartphonesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
