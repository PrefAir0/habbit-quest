import { Body, Controller, Post } from '@nestjs/common';
import { TemplateService } from './template.service.js';
import { TemplateDto } from './dto/template.dto.js';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}


  @Post('/create')
  CreateTemplate(@Body() dto: TemplateDto){
    return this.templateService.create(dto)
  }
}
