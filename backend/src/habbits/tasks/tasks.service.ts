import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { TaskDto } from './dto/tasks.dto.js';
import { NotFoundError } from 'rxjs';

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
        
        const task = this.prismaService.quests.update({
            where: {id},
            data: dto
        })
        if (!task){ throw new NotFoundException}

        return task


        


    }
}
