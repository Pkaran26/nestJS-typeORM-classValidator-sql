import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service'
import { Users } from './users.entity';
import { ValidationPipe } from '../validation.pipe'
import { CreateUserDto } from './create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private _usersService: UsersService){}

  @Post('/')
  createUser(@Body(new ValidationPipe()) payload: CreateUserDto): Promise<Users> {
    return this._usersService.create(payload)
  }

  @Get('/')
  getUsers(): Promise<any> {
    return this._usersService.findAll()
  }

  @Get('/:id')
  getUser(@Param('id') id: string): Promise<Users> {
    return this._usersService.findOne(id)
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): Promise<any> {
    return this._usersService.remove(id)
  }
}
