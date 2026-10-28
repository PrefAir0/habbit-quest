import { Controller } from '@nestjs/common';
import { TemplateService } from './template.service.js';

@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}
}
