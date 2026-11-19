import { questStatus } from "@prisma/client";
import { PrismaService } from "../../../prisma/prisma.service.js";

import { IsEnum, IsString, MaxLength, MinLength, minLength } from 'class-validator'
export class TaskDto{
    @IsEnum(questStatus, {
        message: 'Недопустимое значение'
    })
    status: questStatus
}