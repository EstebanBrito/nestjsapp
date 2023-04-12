// A Data Transfer Object (DTO) defines what data is being
import { TaskStatus } from "../task.entity";
import { IsString, IsNotEmpty, MinLength, IsOptional, IsEnum } from 'class-validator'


// transfered from the client to the server. Useful for validations.
export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsEnum(TaskStatus)
    status?: TaskStatus;
}