import { Text } from "@/Components/text";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDroppable } from "@dnd-kit/core";

import { Badge, Button, Space } from "antd";
import { Children } from "react";

export const KanbanColum = ({ children }: React.PropsWithChildren) => {
  const { isOver, setNodeRef, active } = useDroppable({
    id: "",
  });

  const description = "Description";
  const title = "Title";
  const onAddClickHandler = () => {};
  const count = 4;
  return (
    <div
      ref={setNodeRef}
      style={{ display: "flex", flexDirection: "column", padding: "0 16px" }}
    >
      <div style={{ padding: "12px" }}>
        <Space style={{ width: "100%", justifyContent: "space-between" }}>
          <Space>
            <Text
              ellipsis={{ tooltip: title }}
              strong
              size="xs"
              style={{
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {" "}
              {title}
            </Text>
            {!!count && <Badge count={count} color="pink" />}
          </Space>
          <Button
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={onAddClickHandler}
          />
        </Space>
        {description}
        <div
          style={{
            flex: 1,
            overflowY: active ? "unset" : "scroll",
            border: "2px dashed transparent",
            borderBlock: isOver ? "#000040" : "transparent",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
