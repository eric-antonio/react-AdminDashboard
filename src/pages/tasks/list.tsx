import {
  KanbanBoard,
  KanbanBoardContainer,
} from "@/Components/tasks/kanban/board";
import { KanbanColum } from "@/Components/tasks/kanban/colum";
import { KanbanItem } from "@/Components/tasks/kanban/item";
import { TASK_STAGES_SELECT_QUERY, TASKS_QUERY } from "@/graphql/queries";
import { Task, TaskStage } from "@/graphql/schema.types";
import { TasksQuery } from "@/graphql/types";
import { useList } from "@refinedev/core";
import { GetFields, GetFieldsFromList } from "@refinedev/nestjs-query";
import React from "react";

const TaskList = () => {
  const { data: stages, isLoading: isLoadingStages } = useList<TaskStage>({
    resource: "taskStages",
    filters: [
      {
        field: "title",
        operator: "in",
        value: ["TOD", "IN PROGRESS", "IM REVIEW", "DONE"],
      },
    ],

    sorters: [
      {
        field: "createdAt",
        order: "asc",
      },
    ],
    meta: {
      gqlQuery: TASK_STAGES_SELECT_QUERY,
    },
  });

  const { data: tasks, isLoading: isLoadingTasks } = useList<
    GetFieldsFromList<TasksQuery>
  >({
    resource: "tasks",
    sorters: [
      {
        field: "dueDate",
        order: "asc",
      },
    ],
    queryOptions: {
      enabled: !!stages,
    },
    pagination: {
      mode: "off",
    },
    meta: {
      gqlQuery: TASKS_QUERY,
    },
  });

  const tasksStage = React.useMemo(() => {
    if (!stages?.data || !tasks?.data) {
      return {
        unsignedStage: [],
        stages: [],
      };
    }

    const unsignedStage = tasks.data.filter((task) => !task.stageId === null);
    const grouped: TaskStage[] = stages.data.map((stage) => ({
      ...stage,
      tasks: tasks.data.filter(
        (task) => task.stageId?.toString() === stage.id
      ),
    }));

    return {
      unsignedStage,
      stages: grouped,
    };
  }, [stages, tasks]);

  const handleAddCard = (args: { stageId: string }) => {};
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColum
            id="unsigned"
            title={"unsigned"}
            count={tasksStage.unsignedStage.length || 0}
            onAddClick={() => handleAddCard({ stageId: "unsigned" })}
            data={undefined}
          >
            {tasksStage.unsignedStage.map((task) => (
              <KanbanItem
                key={task.id}
                id={task.id}
                data={{ ...tasks, stageId: "unsigbed" }}
              >
                {task.title}
              </KanbanItem>
            ))}
          </KanbanColum>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};

export default TaskList;
