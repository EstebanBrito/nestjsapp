import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration'

// {isGlobal: true} to use ConigModule globally (you'll have to import it otherwise)
const configModuleOptions = {
  load: [configuration],
  isGlobal: true
}

// Decorator w/ custom params and to extend class AppModule
// imports it's for extra functionality (e.g. DB connections)
// ctrls it's for routes
// provs it's for things (such as funcs) that can be used everywhere in my module, kinda like a "utils" folder
@Module({
  imports: [TasksModule, ConfigModule.forRoot(configModuleOptions)],
  controllers: [],
  providers: []
})
export class AppModule {}
