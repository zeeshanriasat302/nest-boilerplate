import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto/auth.dto";

@Injectable({})
export class AuthService{
    constructor(
        private prisma: PrismaService
        
    ) {}
    async signup(authDto: AuthDto) {
        try{
            const {email, password} = authDto

            await this.prisma.user.create({
                data: {
                    email,
                    password
                }
            })
        } catch (error) {

        }
    }
}