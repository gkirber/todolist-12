import { instance } from "@/common/instance"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "@/features/todolists/api/tasksApi.types.ts"
import { BaseResponse } from "@/common/types"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  createTask(todolistId: string, title: string) {
    return instance.post<BaseResponse<{ item: DomainTask }>>(`/todo-lists/${todolistId}/tasks`, { title })
  },
  updateTask(params: { todolistId: string; taskId: string; model: UpdateTaskModel }) {
    return instance.put<BaseResponse<{ item: DomainTask }>>(
      `/todo-lists/${params.todolistId}/tasks/${params.taskId}`,
      params.model,
    )
  },
  deleteTask(todolistId: string, taskId: string) {
    return instance.delete<BaseResponse>(`/todo-lists/${todolistId}/tasks/${taskId}`)
  },
}
