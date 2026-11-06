import { ConflictException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UserService {

    constructor(private readonly prismaService: PrismaService){}


    async findAll(){
        const users = await this.prismaService.user.findMany({ })

        return users
    }

    async createAcount(dto: UserDto){
        try{
            const user = await this.prismaService.user.create({
            data:{
                login: dto.login,
                name: dto.name,
                password: dto.password,
                timezone: dto.timezone
            }})

            return user
        }catch(err){

            throw new ConflictException("Пользователь уже существует")
        }
        
    }
}
