import { questStatus } from "@prisma/client";
import { PrismaService } from "../../../prisma/prisma.service.js";

export class TaskDto{
    status: questStatus
}