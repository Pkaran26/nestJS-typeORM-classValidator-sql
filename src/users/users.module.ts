import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';

import { ProfileService } from './profile/profile.service';
import { ProfileController } from './profile/profile.controller';
import { Profile } from './profile/profile.entity';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { Posts } from './post/post.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Users, Profile, Posts])],
  providers: [UsersService, ProfileService, PostService],
  controllers: [UsersController, ProfileController, PostController]
})
export class UsersModule {}
