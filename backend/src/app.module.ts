import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TemplateModule } from './habbits/template/template.module.js';
import { TasksModule } from './habbits/tasks/tasks.module.js';
import { UserModule } from './user/user.module.js';
// import { PrismaModule } from './prisma/prisma.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    
    TemplateModule, TasksModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
