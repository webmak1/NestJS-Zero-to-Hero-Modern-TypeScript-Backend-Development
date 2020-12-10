import { TaskStatus } from 'src/tasks/tasks.model';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
