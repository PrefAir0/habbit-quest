import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TemplateService } from './template.service.js';
import { TemplateDto } from './dto/template.dto.js';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}



  @Get('/all')
  findAll(){
    return this.templateService.findAll()
  }


  @Get(':id')
  findById(@Param('id') id: string){
    return this.templateService.findById(id)
  }

  @Post('/create')
  CreateTemplate(@Body() dto: TemplateDto){
    return this.templateService.create(dto)
  }


}
