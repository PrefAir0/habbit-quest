import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { TemplateDto } from './dto/template.dto.js';
import { Templates } from '@prisma/client';

@Injectable()
export class TemplateService {
    constructor(private readonly prismaService: PrismaService){}


    async findById(id: string){
        const template = await this.prismaService.templates.findUnique({
            where: {
                id
            }
        })

        if (!template) {
            throw new NotFoundException
        }

        return template
    }

    async create(dto: TemplateDto): Promise<Templates>{
        const title = dto.title
        const description = dto.description
        const interval = dto.interval


        const template = await this.prismaService.templates.create({
            data: {
                title: title, 
                description: description,
                interval: interval,
                quest: {create: {}}
            },
            include: {
                quest: {}
            }
        })

        return template
    }

    async findAll(){
        return await this.prismaService.templates.findMany()
    }


    
}
