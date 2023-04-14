import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService{
    getRoot(): Object {
        return {
            message: 'Hello from \'/\''
        }
    }

    checkHealth(): Object {
        return {
            message: 'Health checked!'
        }
    }
}