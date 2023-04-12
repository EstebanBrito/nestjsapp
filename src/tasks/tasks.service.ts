import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity'
import { v4 } from 'uuid'
import { UpdateTaskDTO } from './dto/task.dto';

// Service has core functionalities. Extends Injectable.
@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: '1',
            title: 'First Task',
            description: 'This is my first task',
            status: TaskStatus.PENDING
        }
    ]

    getTaskById(id: string): Task | undefined {
        return this.tasks.find(t => t.id === id)
    }

    getTask(id: string): Task | string {
        const task = this.getTaskById(id)
        if (task) {
            return task
        } else {
            return `No task with id: ${id}`
        }
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string, description: string): Task {
        const newTask = {
            id: v4(),
            title: title,
            description: description,
            status: TaskStatus.PENDING
        };
        this.tasks.push(newTask);

        return newTask;
    }

    updateTask(id: string, updatedFields: UpdateTaskDTO): Task | string {
        const task = this.getTaskById(id);
        if (task) {
            const updatedTask = Object.assign(task, updatedFields);
            this.tasks = this.tasks.map(t => t.id === id ? updatedTask : t);
            return updatedTask;
        } else {
            return `No task with id: ${id}`
        }
    }

    deleteTask(id: string): string {
        const task = this.getTaskById(id)
        if (task) {
            // Filter tasks without the given id
            this.tasks = this.tasks.filter(task => task.id !== id)
            return `Task with id ${id} deleted`
        } else {
            return `No task with id ${id}`
        }
    }
}
