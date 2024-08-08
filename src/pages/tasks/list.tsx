import {
  KanbanBoard,
  KanbanBoardContainer,
} from "@/Components/tasks/kanban/board";
import { KanbanColum } from "@/Components/tasks/kanban/colum";
import React from "react";

const TaskList = () => {
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColum></KanbanColum>
          <KanbanColum></KanbanColum>
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};

export default TaskList;
