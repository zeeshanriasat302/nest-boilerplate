import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources: {
                db: {
                    url: "mongodb+srv://menu:menu123456@cluster0.mjb4ydr.mongodb.net/nest-boilerplate?retryWrites=true&w=majority"
                }
            }
        })
    }
}
