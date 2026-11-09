import { NestMiddleware } from "@nestjs/common";
import { Console } from "console";
import { NextFunction, Request, Response } from "express";


export class LoggingMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Request ... ${req.method} ${req.url} ${req.ip}`)
        next()        
    }
}