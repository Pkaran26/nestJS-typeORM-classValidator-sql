import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private ProfileRepository: Repository<Profile>,
  ) {}

  create(payload: Profile): Promise<Profile> {
    return this.ProfileRepository.save(payload)
  }

  findAll(): Promise<Profile[]> {
    return this.ProfileRepository.find({ relations: ["user"] });
  }

  findOne(id: string): Promise<Profile> {
    return this.ProfileRepository.findOne(id, { relations: ["user"] });
  }

  async remove(id: string): Promise<void> {
    await this.ProfileRepository.delete(id);
  }
}
