import { Module } from '@nestjs/common';
import { TemplateService } from './template.service.js';
import { TemplateController } from './template.controller.js';

@Module({
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
