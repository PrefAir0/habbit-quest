import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service.js';

import { UserDto } from './dto/user.dto.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  findAll(){
    return this.userService.findAll()
  }

  @Post('create')
  createNew(@Body() dto: UserDto){
    return this.userService.createAcount(dto)
  }
}

