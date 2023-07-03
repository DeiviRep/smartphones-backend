import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAll() {
    return this.taskRepository.find();
  }

  findOne(id: number) {
    return this.taskRepository.findOneBy({ id });
  }

  create(body: any) {
    const newTask = this.taskRepository.create(body);
    return this.taskRepository.save(newTask);
  }

  async update(id: number, body: any) {
    const task = await this.taskRepository.findOneBy({ id });
    this.taskRepository.merge(task, body);
    return this.taskRepository.save(task);
  }
  async delete(id: number) {
    await this.taskRepository.delete(id);
    return true;
  }
}
