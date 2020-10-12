import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ProfileService } from './profile.service'
import { Profile } from './profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private _profileService: ProfileService){}

  @Post('/')
  createProfile(@Body() payload: Profile): Promise<Profile> {
    return this._profileService.create(payload)
  }

  @Get('/')
  getProfiles(): Promise<Profile[]> {
    return this._profileService.findAll()
  }

  @Get('/:id')
  getProfile(@Param('id') id: string): Promise<Profile> {
    return this._profileService.findOne(id)
  }

  @Delete('/:id')
  deleteProfile(@Param('id') id: string): Promise<any> {
    return this._profileService.remove(id)
  }
}
