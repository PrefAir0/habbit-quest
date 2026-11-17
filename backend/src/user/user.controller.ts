import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service.js';

import { UserDto } from './dto/user.dto.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  findAll(){
    return this.userService.findAll()
  }

  @Post('reg')
  @HttpCode(HttpStatus.CREATED)
  createNew(@Body() dto: UserDto){
    return this.userService.createAcount(dto)
  }
}

