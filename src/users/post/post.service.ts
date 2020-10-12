import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post.entity'

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Posts)
    private postRepository: Repository<Posts>,
  ) {}

  create(payload: Posts): Promise<Posts> {
    return this.postRepository.save(payload);
  }

  findAll(): Promise<Posts[]> {
    return this.postRepository.find({ relations: ["user"] });
  }

  findOne(id: string): Promise<Posts> {
    return this.postRepository.findOne(id, { relations: ["user"] });
  }

  async remove(id: string): Promise<void> {
    await this.postRepository.delete(id);
  }
}
