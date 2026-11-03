import { Body, Controller, Delete, Get, Param, Patch, Put } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { retry } from 'rxjs';
import { TaskDto } from './dto/tasks.dto.js';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get("all")
  findAll(){
    return this.tasksService.findAll()
  }

  @Patch("reset_status/:id")
  statusReset(@Param('id') id: string, @Body() dto: TaskDto){
    return this.tasksService.statusReset(id, dto)
  }
}
