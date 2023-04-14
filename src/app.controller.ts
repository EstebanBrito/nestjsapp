import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'
import { ConfigService } from '@nestjs/config'

@Controller('')
export class AppController {
    constructor(private appService: AppService, private configService: ConfigService) {

    }

    testConfigService(){
        console.log(this.configService.get('db'))
        console.log(this.configService.get('jwt_secret'))
    }

    @Get()
    getRoot(){
        // this.testConfigService()
        return this.appService.getRoot()
    }

    @Get('/health')
    getHealth(){
        return this.appService.checkHealth()
    }
}