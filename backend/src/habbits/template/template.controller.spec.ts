import { Test, TestingModule } from '@nestjs/testing';
import { TemplateController } from './template.controller.js';
import { TemplateService } from './template.service.js';

describe('TemplateController', () => {
  let controller: TemplateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemplateController],
      providers: [TemplateService],
    }).compile();

    controller = module.get<TemplateController>(TemplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
