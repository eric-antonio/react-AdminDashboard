import {
  KanbanBoard,
  KanbanBoardContainer,
} from "@/Components/tasks/kanban/board";
import { KanbanColum } from "@/Components/tasks/kanban/colum";
import { KanbanItem } from "@/Components/tasks/kanban/item";
import React from "react";

const TaskList = () => {
  return (
    <>
      <KanbanBoardContainer>
        <KanbanBoard>
          <KanbanColum>
            <KanbanItem>
                this is my 
            </KanbanItem>
          </KanbanColum>
         
      
        </KanbanBoard>
      </KanbanBoardContainer>
    </>
  );
};

export default TaskList;
