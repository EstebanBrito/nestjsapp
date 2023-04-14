import { Body, Param, Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ConfigService } from '@nestjs/config';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    // Adding service as arg to constructor makes service 
    // an attribute of the TasksController class (check "this.")
    constructor(private readonly tasksService: TasksService, private configService: ConfigService) {

    }

    @Get(':id')// Route Params
    getTask(@Param('id') id: string) {
        return this.tasksService.getTask(id)
    }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }    

    // WARNING: Only accepting requests with a raw JSON body in Postman
    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {
        return this.tasksService.createTask(
            newTask.title, newTask.description
        )
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDTO) {
        return this.tasksService.updateTask(id, updatedFields)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id)
    }
}
