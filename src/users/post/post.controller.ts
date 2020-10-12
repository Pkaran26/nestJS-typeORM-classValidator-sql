import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { PostService } from './post.service'
import { Posts } from './post.entity'

@Controller('posts')
export class PostController {
  constructor(private _postService: PostService){}

  @Post('/')
  createUser(@Body() payload: Posts): Promise<any> {
    return this._postService.create(payload)
  }

  @Get('/')
  getPosts(): Promise<Posts[]> {
    return this._postService.findAll()
  }

  @Get('/:id')
  getPost(@Param('id') id: string): Promise<Posts> {
    return this._postService.findOne(id)
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): Promise<any> {
    return this._postService.remove(id)
  }
}
