import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Smartphone } from '../entities/smartphone.entity';

@Injectable()
export class SmartphonesService {
  constructor(
    @InjectRepository(Smartphone)
    private phoneRepo: Repository<Smartphone>,
  ) {}
  findAll() {
    return this.phoneRepo.find();
  }

  findOne(id: number) {
    return this.phoneRepo.findOneBy({ id });
  }

  create(body: any) {
    const newTask = this.phoneRepo.create(body);
    return this.phoneRepo.save(newTask);
  }

  async update(id: number, body: any) {
    const task = await this.phoneRepo.findOneBy({ id });
    this.phoneRepo.merge(task, body);
    return this.phoneRepo.save(task);
  }
  async delete(id: number) {
    await this.phoneRepo.delete(id);
    return true;
  }
}
