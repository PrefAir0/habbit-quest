import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { AllExeptionFilter } from './common/filters/all-exceptions.filter.js';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  app.useGlobalFilters(new AllExeptionFilter)


  const config = new DocumentBuilder()
      .setTitle('Habbit-Quest API')
      .setDescription('API documentation for habbit-quest')
      .setVersion('0.0.1')
      .setContact('PrefAir0', 'https://github.com/PrefAir0', 'vanas0576@gmail.com')
      .build();

  
  const document = SwaggerModule.createDocument(app, config)


  SwaggerModule.setup('/docs', app, document)

  
  await app.listen(3000);
}
await bootstrap();
