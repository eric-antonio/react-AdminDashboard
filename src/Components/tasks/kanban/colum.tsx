import { Text } from "@/Components/text";
import { useDroppable } from "@dnd-kit/core";

import { Space } from "antd";


export const KanbanColum = () => {
  const { isOver, setNodeRef, active } = useDroppable({
    id: "",
  });
  return (
    <div
      ref={setNodeRef}
      style={{ display: "flex", flexDirection: "column", padding: "0 16px" }}
    >
      <div style={{ padding: "12px" }}>
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Space>
            <Text ellipsis={{ tooltip: "TITLE TO DO" }}> TITLE TODO</Text>
          </Space>
        </Space>
      </div>
    </div>
  );
};
