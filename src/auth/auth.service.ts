import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'
import { AuthDto } from "./dto/auth.dto";

@Injectable({})
export class AuthService{
    constructor(
        private prisma: PrismaService
        
    ) {}
    async signup(authDto: AuthDto) {
        try{
            const {email, password} = authDto

            const hashPassword = await argon.hash(password)
           const user =  await this.prisma.user.create({
                data: {
                    email,
                    password: hashPassword
                }
            })
            return user
        } catch (error) {

        }
    }
}