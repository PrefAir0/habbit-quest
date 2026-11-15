import { Injectable, UnauthorizedException, type CanActivate, type ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest() as Request

        const token = request.headers['authorization']

        if (!token || !token.startsWith('Bearer')){
            throw new UnauthorizedException('пройдите авторизацию')
        }

        return true
    }
}