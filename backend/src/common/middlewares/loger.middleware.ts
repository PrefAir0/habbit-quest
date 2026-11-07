import { NestMiddleware } from "@nestjs/common";
import { Console } from "console";
import { NextFunction } from "express";
import { userInfo } from "os";


export class LoggingMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Request ... ${req.method} ${req.url}`)
        next()        
    }
}