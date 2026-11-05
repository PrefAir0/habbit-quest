import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { TaskDto } from './dto/tasks.dto.js';
import { interval, NotFoundError } from 'rxjs';
import { PrismaClient, Quests } from '@prisma/client';

@Injectable()
export class TasksService {
    constructor(private readonly prismaService: PrismaService){}

    async findById(id : string){
        const task = this.prismaService.quests.findUnique({
            where: {
                id
            }
        })

        if (!task){ throw new NotFoundException}
        
        return task
    }

    async findAll(){
        return await this.prismaService.quests.findMany()
    }

    async statusReset(id: string, dto: TaskDto){
        
        const task = await this.prismaService.quests.update({
            where: {id},
            data: dto
        })

        if (!task){ throw new NotFoundException}

        // if (task.status == "BURN"){
        //     // await burnTask(task)
        // }

        // if (task.status == "COMPLEATED"){
            
        // }
        
        await this.createNextTask(task)

        return task

    }

    async createNextTask(task: Quests){

        const template = await this.prismaService.templates.findUnique({
            where:{
                id: task.templateID
            }
        })

        if (!template){ throw new NotFoundException("Такого шаблона не найдено")}
        
        const nextDate = new Date(task.date)

        nextDate.setDate(nextDate.getDate() + template.interval)

        const quest = await this.prismaService.quests.create({
            data:{
                templateID: task.templateID,
                date: nextDate
            }
        }) 
    }

    // async burnTask(task:Quests){
        
    // }
}
