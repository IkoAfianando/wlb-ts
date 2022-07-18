import { Controller, Get } from '@nestjs/common';

@Controller()
export class DefaultController {
    constructor() { }

    @Get() 
    getHello(): string {
        return 'Welcome to Test from Iko Afianando';
    }
    
}
