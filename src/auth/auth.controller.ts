import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController{
    constructor(
        private authservice: AuthService
    ){}

    @Post('signup')
    signup(@Body() dto: AuthDto){
        return this.authservice.signup(dto)
    }
}