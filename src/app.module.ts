import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

// Decorator to extend class
// imports it's for extra functionality (e.g. DB connections)
// ctrls it's for routes
// provs it's for things (such as funcs) that can be used everywhere in my module, kinda like a "utils" folder
@Module({
  imports: [TasksModule],
  controllers: [],
  providers: []
})
export class AppModule {}
