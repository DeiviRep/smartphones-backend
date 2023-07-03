import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
