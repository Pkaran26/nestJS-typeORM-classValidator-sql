import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';

import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { Profile } from './profile/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Profile])],
  providers: [UsersService, ProfileService],
  controllers: [UsersController, ProfileController]
})
export class UsersModule {}
