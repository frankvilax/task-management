import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

//   @Get()
//   getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
//     if (Object.keys(filterDto).length) {
//       return this.tasksService.getTasksWithFilters(filterDto);
//     } else {
//       return this.tasksService.getAllTasks();
//     }
//   }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number): Promise <Task> {
        return await this.tasksService.getTaskById(id);
    }

//   @Post()
//   @UsePipes(ValidationPipe)
//   createTask(@Body() createTaskDto: CreateTaskDto): Task {
//     return this.tasksService.createTask(createTaskDto);
//   }

//   @Delete('/:id')
//   deleteTask(@Param('id') id: string) {
//     return this.tasksService.deleteTask(id);
//   }

//   @Patch('/:id/status')
//   updateTask(
//     @Param('id') id: string,
//     @Body('status', TaskStatusValidationPipe) taskStatus: TaskStatus,
//   ): Task {
//     return this.tasksService.updateTask(id, taskStatus);
//   }
}
