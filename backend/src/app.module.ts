import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TemplateModule } from './habbits/template/template.module.js';
import { TasksModule } from './habbits/tasks/tasks.module.js';
import { UserModule } from './user/user.module.js';
// import { PrismaModule } from './prisma/prisma.module.js';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import {ScheduleModule} from '@nestjs/schedule'
import { LoggingMiddleware } from './common/middlewares/loger.middleware.js';

@Module({
  imports: [
    ScheduleModule.forRoot(),

    ConfigModule.forRoot({
      isGlobal: true
    }),
    
    TemplateModule, TasksModule, UserModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*')
  }
}
