import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SmartphonesService } from './services/smartphones.service';
import { SmartphonesController } from './controllers/smartphones.controller';
import { Smartphone } from './entities/smartphone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Smartphone])],
  controllers: [SmartphonesController],
  providers: [SmartphonesService],
})
export class SmartphonesModule {}
